import React, {FC} from 'react';
import s from './../Dialogs.module.css';
import {DialogMessageType} from "../../../types/types";

type  PropsType={
    message:string
    id:number
}
const Message:FC<PropsType> = (props) => {
    return (
        <div className={s.message}> {props.message}</div>
    )
}

export default Message;