import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Sidebar/Sidebar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import {initializeApp} from "./Redux/app-reducer";
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));
const Dialogs = React.lazy(() => import("./components/Dialogs/DialogsContainer"));


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    };

    render() {
        if (!this.props.initialized){
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <React.Suspense fallback={<Preloader/>}>
                    <Route path='/dialogs' render={() => <Dialogs/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/users' component={UsersContainer}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/friends' component={Friends}/>
                    <Route path='/login' component={Login}/>
                    </React.Suspense>
                </div>

            </div>

        );
    }
}

const mapStateToProps =(state)=>({
    initialized: state.app.initialized,

});


export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);