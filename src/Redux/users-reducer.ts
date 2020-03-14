import {UsersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/objects-helpers";
import {UserType} from "../types/types";

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
const usersReducer = (state = initialState, action:any):InitialStateType => {

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

type setCurrentPageActionType={
    type:typeof SET_CURRENT_PAGE
    p:number
}
const setCurrentPage = (p:number):setCurrentPageActionType => ({type: SET_CURRENT_PAGE, p});
type followSuccessActionType={
    type:typeof FOLLOW
    userId:number
}
const followSuccess = (userId:number):followSuccessActionType => ({type: FOLLOW, userId});
type unfollowSuccessActionType={
    type:typeof UNFOLLOW
    userId:number
}
const unfollowSuccess = (userId:number):unfollowSuccessActionType => ({type: UNFOLLOW, userId});
type setUsersActionType={
    type:typeof SET_USERS
    users:Array<UserType>
}
const setUsers = (users:Array<UserType>):setUsersActionType => ({type: SET_USERS, users});
type setTotalUsersCountActionType={
    type:typeof SET_TOTAL_USERS_COUNT
    totalCount:number
}
const setTotalUsersCount = (totalCount:number):setTotalUsersCountActionType => ({type: SET_TOTAL_USERS_COUNT, totalCount});
type toggleIsFetchingActionType={
    type:typeof TOGGLE_IS_FETCHING
    isFetching:boolean
}
const toggleIsFetching = (isFetching:boolean):toggleIsFetchingActionType => ({type: TOGGLE_IS_FETCHING, isFetching});
type setCurrentPagePortionActionType={
    type:typeof SET_PORTION_PAGE
    curPortionNumber:number
}
const setCurrentPagePortion = (curPortionNumber:number):setCurrentPagePortionActionType => ({type: SET_PORTION_PAGE, curPortionNumber});
type toggleIsFollowingProgressActionType={
    type:typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching:boolean
    userId:number
}
const toggleIsFollowingProgress = (isFetching:boolean, userId:number):toggleIsFollowingProgressActionType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});

export const requestUsers = (currentPage:number, pageSize:number) => {
    return async (dispatch:any) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));
        let response = await UsersAPI.getUsers(currentPage, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(response.data.items));
        dispatch(setTotalUsersCount(response.data.totalCount));
    }
};
export const getPagePortion = (curPortionNumber:number) => {
    return (dispatch:any) => {
        dispatch(setCurrentPagePortion(curPortionNumber));
    }
};

const followUnfollowFlow = async (dispatch:any, id:number, apiMethod:any, actionCreator:any) => {
    dispatch(toggleIsFollowingProgress(true, id));
    let response = await apiMethod(id);
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(id));
    }
    dispatch(toggleIsFollowingProgress(false, id))
};

export const follow = (id:number) => {
    return async (dispatch:any) => {
        await followUnfollowFlow(dispatch, id, UsersAPI.onFollowClick.bind(UsersAPI), followSuccess)
    };
};

export const unfollow = (id:number) => {
    return async (dispatch:any) => {
        await followUnfollowFlow(dispatch, id, UsersAPI.onUnFollowClick.bind(UsersAPI), unfollowSuccess)
    };
};

export default usersReducer;