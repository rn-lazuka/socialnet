import {updateObjectInArray} from '../utils/objects-helpers'
import {UserType} from '../types/types'
import {Dispatch} from 'redux'
import {BaseThunkType, InferActionsTypes} from './redux-store'
import {UsersAPI} from '../api/users-api'

let initialState = {
  users: [] as Array<UserType>,
  pageSize: 50,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [] as Array<number>, //Array of users ids
  curPortionNumber: 1
}
type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case 'FOLLOW':
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
        // users: state.users.map(u => {
        //     if (u.id === action.userId) {
        //         return {...u, followed: true}
        //     }
        //     return u;
        // })
      }
    case
    'UNFOLLOW':
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
        // users: state.users.map(u => {
        //     if (u.id === action.userId) {
        //         return {...u, followed: false}
        //     }
        //     return u;
        // })
      }
    case
    'SET_USERS':
      return {...state, users: action.users}
    case
    'SET_CURRENT_PAGE':
      return {...state, currentPage: action.p}
    case
    'SET_TOTAL_USERS_COUNT':
      return {...state, totalUsersCount: action.totalCount}
    case
    'TOGGLE_IS_FETCHING':
      return {...state, isFetching: action.isFetching}
    case
    'TOGGLE_IS_FOLLOWING_PROGRESS': {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId] :
          state.followingInProgress.filter(id => id !== action.userId)
      }
    }
    case
    'SET_PORTION_PAGE':
      return {...state, curPortionNumber: action.curPortionNumber}
    default:
      return state

  }
}

export const actions = {
  setCurrentPage: (p: number) => ({type: 'SET_CURRENT_PAGE', p} as const),
  followSuccess: (userId: number) => ({type: 'FOLLOW', userId} as const),
  unfollowSuccess: (userId: number) => ({type: 'UNFOLLOW', userId} as const),
  setUsers: (users: Array<UserType>) => ({type: 'SET_USERS', users} as const),
  setTotalUsersCount: (totalCount: number) => ({type: 'SET_TOTAL_USERS_COUNT', totalCount} as const),
  toggleIsFetching: (isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching} as const),
  setCurrentPagePortion: (curPortionNumber: number) => ({type: 'SET_PORTION_PAGE', curPortionNumber} as const),
  toggleIsFollowingProgress: (isFetching: boolean, userId: number) => ({
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
    isFetching,
    userId
  } as const)
}

type ThunkType = BaseThunkType<ActionsTypes>

export const requestUsers = (currentPage: number, pageSize: number): ThunkType => {
  return async (dispatch) => {
    dispatch(actions.toggleIsFetching(true))
    dispatch(actions.setCurrentPage(currentPage))
    let usersData = await UsersAPI.getUsers(currentPage, pageSize)
    dispatch(actions.toggleIsFetching(false))
    dispatch(actions.setUsers(usersData.items))
    dispatch(actions.setTotalUsersCount(usersData.totalCount))
  }
}
export const getPagePortion = (curPortionNumber: number): ThunkType => {
  return async (dispatch) => {
    dispatch(actions.setCurrentPagePortion(curPortionNumber))
  }
}

const _followUnfollowFlow = async (dispatch: Dispatch<ActionsTypes>, id: number, apiMethod: any, actionCreator: (userId: number) => ActionsTypes) => {
  dispatch(actions.toggleIsFollowingProgress(true, id))
  let response = await apiMethod(id)
  if (response.data.resultCode === 0) {
    dispatch(actionCreator(id))
  }
  dispatch(actions.toggleIsFollowingProgress(false, id))
}

export const follow = (id: number): ThunkType => {
  return async (dispatch) => {
    await _followUnfollowFlow(dispatch, id, UsersAPI.onFollowClick.bind(UsersAPI), actions.followSuccess)
  }
}

export const unfollow = (id: number): ThunkType => {
  return async (dispatch) => {
    await _followUnfollowFlow(dispatch, id, UsersAPI.onUnFollowClick.bind(UsersAPI), actions.unfollowSuccess)
  }
}

export default usersReducer