import React from 'react';
import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(d => <Dialog name={d.name} id={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id}/>);
    let newPostElement = React.createRef();

    let addNewPost = () => {
        props.addDialogPost();
    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewMessage(text)
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
                              onChange={onPostChange}
                              ref={newPostElement}> </textarea>
                </div>
                <div>
                    <button onClick={addNewPost}>Add post</button>
                </div>
            </div>
            <div>

            </div>
        </div>

    )
}

export default Dialogs;