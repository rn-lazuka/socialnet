import React, {FC} from 'react';
import s from './Music.module.css';

type PropsType = {

}
const Music:FC<PropsType> = (props) => {
    return (
        <div className={s.container}>
            Music
        </div>
    )
}

export default Music;