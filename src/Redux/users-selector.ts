import {createSelector} from "reselect";
import {AppStateType} from "./redux-store";

const getUsersSelector =(state:AppStateType) => {
    return state.usersPage.users;
};


export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(()=>true);
});

export const getTotalUsersCount =(state:AppStateType) => {
    return state.usersPage.totalUsersCount;
};
export const getPageSize =(state:AppStateType) => {
    return state.usersPage.pageSize;
};
export const getCurrentPage =(state:AppStateType) => {
    return state.usersPage.currentPage;
};
export const getIsFetching =(state:AppStateType) => {
    return state.usersPage.isFetching;
};
export const getFollowingInProgress =(state:AppStateType) => {
    return state.usersPage.followingInProgress;
};
export const getCurPortionNumber =(state:AppStateType) => {
    return state.usersPage.curPortionNumber;
};
export const getIsAuth =(state:AppStateType) => {
    return state.auth.isAuth;
};
