import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC, setCurrentPageAC, setTotalUsersCountAC} from "../../Redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import React from "react";


class UsersContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }
    onPageChanged = (p) => {
        this.props.setCurrentPage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })

    };

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      onPageChanged={this.onPageChanged}
                      onUnFollowClick={this.props.onUnFollowClick}
                      onFollowClick={this.props.onFollowClick}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage
    }

};

let mapDispatchToProps = (dispatch) => {
    return {
        onFollowClick: (userId) => {
            dispatch(followAC(userId))
        },
        onUnFollowClick: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (p) => {
            dispatch(setCurrentPageAC(p))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);