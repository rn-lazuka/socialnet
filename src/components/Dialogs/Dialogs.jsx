import React from 'react';
import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(d => <Dialog name={d.name} id={d.id}/>);
    let messagesElements = props.messages.map(m => <Message message={m.message} id={m.id}/>);

    let addDialogPost = () => {
        props.addDialogPost();
    };
    let onMessageChange = (e) => {
        let text = e.currentTarget.value;
        props.onMessageChange(text);
    };
    if(!props.isAuth){ return  <Redirect to={"/login"}/>};

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
};

export default Dialogs;