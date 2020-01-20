import React from 'react';
import Header from "./Header";

import {setAuthUserData} from "../../Redux/auth-reducer";
import {connect} from "react-redux";
import {AuthAPI} from "../../api/api";



class HeaderContainer extends React.Component {
    componentDidMount() {
 AuthAPI.authMe(this.props.setAuthUserData)
    }

    render() {
        return <Header {...this.props}/>
    }
}
let mapStateToProps = (state)=> {
        return {
                isAuth: state.auth.isAuth,
                login:state.auth.login
        }
}

export default connect (mapStateToProps,{setAuthUserData})(HeaderContainer);