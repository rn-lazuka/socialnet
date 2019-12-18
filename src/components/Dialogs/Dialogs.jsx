import React from 'react';
import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";



const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map ( d => <Dialog name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map ( m => <Message message={m.message} id={m.id}/>);
    let newPostElement = React.createRef();
    let addNewPost = () => {
        let text = newPostElement.current.value;
        alert(text);
        newPostElement.current.value="";
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <div>
                    <textarea ref={newPostElement}> </textarea>
                </div>
                <div>
                    <button onClick={addNewPost}>Add post</button>
                </div>
            </div>
        </div>

    )
}

export default Dialogs;