import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addDialogPost, addPost, updateNewMessage, updateNewPostText} from "./Redux/State";


export let renderEntireTree = (state)=>{
    ReactDOM.render(
        <BrowserRouter>
        <App state={state}
             addDialogPost={addDialogPost}
             updateNewMessage={updateNewMessage}
             addPost={addPost}
             updateNewPostText={updateNewPostText}/>
        </BrowserRouter>, document.getElementById('root'));

};
