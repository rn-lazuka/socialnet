import React from 'react';
import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {addDialogPostActionCreator, onMessageChangeActionCreator} from "../../Redux/dialogs-reducer";

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(d => <Dialog name={d.name} id={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id}/>);


    let addDialogPost = () => {
        props.dispatch(addDialogPostActionCreator());
    };
    let onMessageChange = (e) => {
        let text = e.currentTarget.value;
        props.dispatch(onMessageChangeActionCreator(text))
    };
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea value={props.newMessageText}
                              onChange={onMessageChange}>
                    </textarea>
                </div>
                <div>
                    <button onClick={addDialogPost}>Add post</button>
                </div>
            </div>
            <div>

            </div>
        </div>

    )
}

export default Dialogs;