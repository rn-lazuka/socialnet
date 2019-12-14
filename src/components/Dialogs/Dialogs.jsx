import React from 'react';
import s from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";



const Dialogs = (props) => {
    let dialogs = [
        {name:'Sasha', id:1},
        {name:'Pasha', id:2},
        {name:'Dasha', id:3},
        {name:'Masha', id:4},
        {name:'Glasha', id:5},
        {name:'Dimych', id:6}
    ]
    let messages = [
        {id:1, message:'Hi'},
        {id:2, message:'How is your way to samurai?'},
        {id:3, message:'great work'},
        {id:4, message:'Yo'},
        {id:5, message:'YOOOO'},
        {id:6, message:'WAZZZZUUUP'}
    ]
    let dialogsElements = dialogs.map ( d => <Dialog name={d.name} id={d.id}/>);
    let messagesElements = messages.map ( m => <Message message={m.message} id={m.id}/>);


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>

    )
}

export default Dialogs;