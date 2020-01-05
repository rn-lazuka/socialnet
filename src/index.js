import './index.css';
import * as serviceWorker from './serviceWorker';
import state, {subscribe} from "./Redux/State";
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

renderEntireTree(state);
subscribe(renderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
