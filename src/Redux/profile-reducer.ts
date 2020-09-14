import {FormAction, stopSubmit} from 'redux-form'
import {PhotosType, ProfileMessagesType, ProfileType} from '../types/types'
import {BaseThunkType, InferActionsTypes} from './redux-store'
import {ProfileAPI} from '../api/profile-api'

let initialState = {
  posts: [
    {id: 1, message: 'Вжух вжух вжух, мечи воздух рассекают', likeCount: 999},
    {id: 2, message: 'Great, we can go next step!', likeCount: 17},
    {id: 3, message: 'Кто не работает, тот ест.', likeCount: 0},
    {id: 4, message: 'Жить хорошо, а хорошо жить ещё лучше!', likeCount: 666}
  ] as Array<ProfileMessagesType>,
  profile: null as ProfileType | null,
  status: ''
}
type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>

const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {

  switch (action.type) {
    case 'ADD_POST': {
      let newPost = {
        id: 5,
        message: action.newPostText,
        likeCount: 0
      }
      return {...state, posts: [...state.posts, newPost]}
    }
    case 'DELETE_POST': {
      return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
    }
    case 'SET_USER_PROFILE': {
      return {...state, profile: action.profile}
    }
    case 'SET_USER_STATUS': {
      return {...state, status: action.status}
    }
    case 'SAVE_PHOTO_SUCCESS': {
      return {...state, profile: {...state.profile, photos: action.photos} as ProfileType}
    }
    default:
      return state
  }
}

export const actions = {
  addPostActionCreator: (newPostText: string) => ({type: 'ADD_POST', newPostText} as const),
  deletePost: (postId: number) => ({type: 'DELETE_POST', postId} as const),
  setUserProfile: (profile: ProfileType) => ({type: 'SET_USER_PROFILE', profile} as const),
  setUserStatus: (status: string) => ({type: 'SET_USER_STATUS', status} as const),
  savePhotoSuccess: (photos: PhotosType) => ({type: 'SAVE_PHOTO_SUCCESS', photos} as const)
}

type ThunkType = BaseThunkType<ActionsType | FormAction>

export const getUserProfile = (id: number | null): ThunkType => async (dispatch) => {
  const response = await ProfileAPI.getProfile(id)
  dispatch(actions.setUserProfile(response))
}
export const getUserStatus = (id: number): ThunkType => async (dispatch) => {
  let response = await ProfileAPI.getStatus(id)
  dispatch(actions.setUserStatus(response))
}
export const updateUserStatus = (status: string): ThunkType => async (dispatch) => {
  try {
    const response = await ProfileAPI.updateStatus(status)
    if (response.resultCode === 0) {
      dispatch(actions.setUserStatus(status))
    }
  } catch (error) {
    alert(error.message)
  }
}
export const savePhoto = (file: File): ThunkType => async (dispatch) => {
  const response = await ProfileAPI.savePhoto(file)
  if (response.resultCode === 0) {
    dispatch(actions.savePhotoSuccess(response.data.photos))
  }
}
//need to fix saveProfile type
export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
  const userId = getState().auth.userId
  const response = await ProfileAPI.saveProfile(profile)
  if (response.resultCode === 0) {
    if (userId !== null) {
      await dispatch(getUserProfile(userId))
    } else {
      throw new Error('user-id can\'t be null')
    }
  } else {
    dispatch(stopSubmit('edit-profile', {_error: response.messages[0]}))
    return Promise.reject(response.messages[0])
  }
}

export default profileReducer