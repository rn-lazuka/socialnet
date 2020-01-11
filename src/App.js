import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Sidebar/Sidebar";


const App = (props) => {

    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <Dialogs dialogsPage={props.state.dialogsPage}
                                                              messages={props.state.dialogsPage.messages}
                                                              newMessageText={props.state.dialogsPage.newMessageText}
                                                              dispatch={props.dispatch}/>}/>
                <Route path='/profile' render={() => <Profile dispatch={props.dispatch}
                                                              profilePage={props.state.profilePage}/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
                <Route path='/friends' component={Friends}/>
            </div>

        </div>

    );
}

export default App;
