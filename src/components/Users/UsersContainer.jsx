import {connect} from "react-redux";
import {follow, unfollow, requestUsers} from "../../Redux/users-reducer";
import Users from "./Users";
import React from "react";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress, getIsAuth,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../Redux/users-selector";


class UsersContainer extends React.Component {
    componentDidMount() {
        const {currentPage,pageSize}=this.props;
        this.props.requestUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber) => {
        const {pageSize}=this.props;
        this.props.requestUsers(pageNumber,pageSize)
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
                />}
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: getIsAuth(state),
        users: getUsers(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }

};

export default compose(connect(mapStateToProps, {follow, unfollow,requestUsers}))(UsersContainer)
