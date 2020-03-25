import React, {FC} from 'react';
import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm/AddMessageForm";
import {DialogMessageType, DialogType} from "../../types/types";


type PropsType = {
    dialogs: Array<DialogType>
    messages: Array<DialogMessageType>
    addDialogPost: (message:string) => void
}


const Dialogs:FC<PropsType> = (props) => {
    let dialogsElements = props.dialogs.map(d => <Dialog name={d.name} id={d.id}/>);
    let messagesElements = props.messages.map(m => <Message message={m.message} id={m.id}/>);

    //need to fix addDialogPost values type
    let addDialogPost = (values:any) => {
        props.addDialogPost(values.newMessageBody)
    };


    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div> {messagesElements}</div>
                <AddMessageForm onSubmit={addDialogPost}/>
            </div>
        </div>

    )
};


export default Dialogs;