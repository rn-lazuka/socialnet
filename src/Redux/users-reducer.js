import {UsersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/objects-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';
const SET_PORTION_PAGE = 'SET_PORTION_PAGE';

let initialState = {
    users: [],
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
    curPortionNumber:1
};

const usersReducer = (state = initialState, action) => {

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


export const setCurrentPage = (p) => ({type: SET_CURRENT_PAGE, p});
export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setCurrentPagePortion = (curPortionNumber) => ({type: SET_PORTION_PAGE, curPortionNumber});
export const toggleIsFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});

export const requestUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));
        let response = await UsersAPI.getUsers(currentPage, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(response.data.items));
        dispatch(setTotalUsersCount(response.data.totalCount));
    }
};
export const getPagePortion = (curPortionNumber) => {
    return (dispatch) => {
        dispatch(setCurrentPagePortion(curPortionNumber));
    }
};

const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) => {
    dispatch(toggleIsFollowingProgress(true, id));
    let response = await apiMethod(id);
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(id));
    }
    dispatch(toggleIsFollowingProgress(false, id))
};

export const follow = (id) => {
    return async (dispatch) => {
        await followUnfollowFlow(dispatch, id, UsersAPI.onFollowClick.bind(UsersAPI), followSuccess)
    };
};

export const unfollow = (id) => {
    return async (dispatch) => {
        await followUnfollowFlow(dispatch, id, UsersAPI.onUnFollowClick.bind(UsersAPI), unfollowSuccess)
    };
};

export default usersReducer;