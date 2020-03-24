import {UsersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/objects-helpers";
import {UserType} from "../types/types";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';
const SET_PORTION_PAGE = 'SET_PORTION_PAGE';

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<number>, //Array of users ids
    curPortionNumber: 1
};
type InitialStateType = typeof initialState
const usersReducer = (state = initialState, action:UsersActionTypes):InitialStateType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
                // users: state.users.map(u => {
                //     if (u.id === action.userId) {
                //         return {...u, followed: true}
                //     }
                //     return u;
                // })
            };
        case
        UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
                // users: state.users.map(u => {
                //     if (u.id === action.userId) {
                //         return {...u, followed: false}
                //     }
                //     return u;
                // })
            };
        case
        SET_USERS:
            return {...state, users: action.users};
        case
        SET_CURRENT_PAGE:
            return {...state, currentPage: action.p};
        case
        SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalCount};
        case
        TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        case
        TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId] :
                    state.followingInProgress.filter(id => id !== action.userId)
            };
        }
        case
        SET_PORTION_PAGE:
            return {...state, curPortionNumber: action.curPortionNumber};
        default:
            return state;

    }
};
type UsersActionTypes= SetCurrentPageActionType|FollowSuccessActionType|UnfollowSuccessActionType|
    SetUsersActionType|SetTotalUsersCountActionType|ToggleIsFetchingActionType|SetCurrentPagePortionActionType|
    ToggleIsFollowingProgressActionType

type SetCurrentPageActionType={
    type:typeof SET_CURRENT_PAGE
    p:number
}
const setCurrentPage = (p:number):SetCurrentPageActionType => ({type: SET_CURRENT_PAGE, p});
type FollowSuccessActionType={
    type:typeof FOLLOW
    userId:number
}
const followSuccess = (userId:number):FollowSuccessActionType => ({type: FOLLOW, userId});
type UnfollowSuccessActionType={
    type:typeof UNFOLLOW
    userId:number
}
const unfollowSuccess = (userId:number):UnfollowSuccessActionType => ({type: UNFOLLOW, userId});
type SetUsersActionType={
    type:typeof SET_USERS
    users:Array<UserType>
}
const setUsers = (users:Array<UserType>):SetUsersActionType => ({type: SET_USERS, users});
type SetTotalUsersCountActionType={
    type:typeof SET_TOTAL_USERS_COUNT
    totalCount:number
}
const setTotalUsersCount = (totalCount:number):SetTotalUsersCountActionType => ({type: SET_TOTAL_USERS_COUNT, totalCount});
type ToggleIsFetchingActionType={
    type:typeof TOGGLE_IS_FETCHING
    isFetching:boolean
}
const toggleIsFetching = (isFetching:boolean):ToggleIsFetchingActionType => ({type: TOGGLE_IS_FETCHING, isFetching});
type SetCurrentPagePortionActionType={
    type:typeof SET_PORTION_PAGE
    curPortionNumber:number
}
const setCurrentPagePortion = (curPortionNumber:number):SetCurrentPagePortionActionType => ({type: SET_PORTION_PAGE, curPortionNumber});
type ToggleIsFollowingProgressActionType={
    type:typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching:boolean
    userId:number
}
const toggleIsFollowingProgress = (isFetching:boolean, userId:number):ToggleIsFollowingProgressActionType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});

type DispatchType = Dispatch<UsersActionTypes>
type GetStateType = ()=>AppStateType
type ThunkType<P> = ThunkAction<P,AppStateType,unknown,UsersActionTypes>

export const requestUsers = (currentPage:number, pageSize:number):ThunkType<Promise<void>> => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));
        let usersData = await UsersAPI.getUsers(currentPage, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(usersData.items));
        dispatch(setTotalUsersCount(usersData.totalCount));
    }
};
export const getPagePortion = (curPortionNumber:number):ThunkType<void> => {
    return (dispatch:any) => {
        dispatch(setCurrentPagePortion(curPortionNumber));
    }
};

const _followUnfollowFlow = async (dispatch:DispatchType, id:number, apiMethod:any, actionCreator:(userId:number)=>FollowSuccessActionType|UnfollowSuccessActionType) => {
    dispatch(toggleIsFollowingProgress(true, id));
    let response = await apiMethod(id);
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(id));
    }
    dispatch(toggleIsFollowingProgress(false, id))
};

export const follow = (id:number):ThunkType<Promise<void>>  => {
    return async (dispatch:any) => {
        await _followUnfollowFlow(dispatch, id, UsersAPI.onFollowClick.bind(UsersAPI), followSuccess)
    };
};

export const unfollow = (id:number):ThunkType<Promise<void>>  => {
    return async (dispatch:any) => {
        await _followUnfollowFlow(dispatch, id, UsersAPI.onUnFollowClick.bind(UsersAPI), unfollowSuccess)
    };
};

export default usersReducer;