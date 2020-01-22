import React from 'react';
import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";

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
                <AddMessageFormRedux onSubmit={addDialogPost}/>
            </div>
            <div>l

            </div>
        </div>

    )
};


const AddMessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name={"newMessageBody"} component={"textarea"} placeholder={"Enter your text"}/>
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
};

const AddMessageFormRedux = reduxForm ({form:"dialogAddMessageForm"})(AddMessageForm);

export default Dialogs;