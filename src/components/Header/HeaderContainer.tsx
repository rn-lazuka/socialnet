import React from 'react';
import Header from "./Header";
import {logout} from "../../Redux/auth-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";

type PropsType={

}
type MapStateType={
    isAuth:boolean
    login:string|null
}
type MapDispatchType={
    logout:()=>void
}


class HeaderContainer extends React.Component<PropsType&MapStateType&MapDispatchType> {
    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state:AppStateType):MapStateType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect<MapStateType,MapDispatchType,{},AppStateType>(mapStateToProps, {logout})(HeaderContainer);