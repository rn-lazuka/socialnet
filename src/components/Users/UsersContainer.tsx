import {connect} from "react-redux";
import {follow, unfollow, requestUsers, getPagePortion} from "../../Redux/users-reducer";
import Users from "./Users";
import React from "react";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurPortionNumber,
    getCurrentPage,
    getFollowingInProgress, getIsAuth,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../Redux/users-selector";
import {UserType} from "../../types/types";
import {AppStateType} from "../../Redux/redux-store";

type MapStatePropsType = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    totalUsersCount: number
    curPortionNumber: number
    users: Array<UserType>
    isAuth: boolean
    followingInProgress: Array<number>
}
type MapDispatchPropsType = {
    follow: (userId:number) => void
    unfollow: (userId:number) => void
    requestUsers: (currentPage: number, pageSize: number) => void
    getPagePortion: (curPortionNumber: number) => void
}
type PropsType = MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.requestUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber: number, curPortionNumber: number) => {
        const {pageSize} = this.props;
        this.props.requestUsers(pageNumber, pageSize);
        this.props.getPagePortion(curPortionNumber);
    };


    render() {
        return <>
            {this.props.isFetching ?
                <Preloader/> :
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       users={this.props.users}
                       onPageChanged={this.onPageChanged}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       followingInProgress={this.props.followingInProgress}
                       isAuth={this.props.isAuth}
                       curPortionNumber={this.props.curPortionNumber}
                />}
        </>
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: getIsAuth(state),
        users: getUsers(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        curPortionNumber: getCurPortionNumber(state)

    }

};
//<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState>
export default compose(connect<MapStatePropsType,MapDispatchPropsType,{},AppStateType>(mapStateToProps, {follow, unfollow, requestUsers, getPagePortion}))(UsersContainer)
