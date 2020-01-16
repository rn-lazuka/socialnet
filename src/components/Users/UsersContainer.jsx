import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../Redux/users-reducer";
import Users from "./Users";


let mapStateToProps = (state) => {
    return {users: state.usersPage.users}
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
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);