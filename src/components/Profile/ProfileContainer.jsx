import React from 'react';
import Profile from "./Profile";
import {getUserProfile} from "../../Redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hok/withAuthRedirect";


class ProfileContainer extends React.Component {
    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 5676
        }
        this.props.getUserProfile(userId)
    }

    render() {

        return <Profile {...this.props} profile={this.props.profile}/>

    };
}
let AutRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
};
let WithUrlDataProfileContainer = withRouter(AutRedirectComponent);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataProfileContainer);