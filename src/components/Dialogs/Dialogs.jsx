import React from 'react';
import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(d => <Dialog name={d.name} id={d.id}/>);
    let messagesElements = props.messages.map(m => <Message message={m.message} id={m.id}/>);

    let addDialogPost = (values) => {
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