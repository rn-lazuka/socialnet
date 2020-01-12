import React from 'react';
import {addDialogPostActionCreator, onMessageChangeActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState();

    let addDialogPost = () => {
        props.store.dispatch(addDialogPostActionCreator());
    };
    let onMessageChange = (text) => {
        props.store.dispatch(onMessageChangeActionCreator(text))
    };
    return (<Dialogs addDialogPost={addDialogPost}
                     onMessageChange={onMessageChange}
                     dialogs={state.dialogsPage.dialogs}
                     messages={state.dialogsPage.messages}
                     newMessageText={state.dialogsPage.newMessageText}/>)
};

export default DialogsContainer;