import React, {FC} from 'react';
import s from './Friend.module.css';

type PropsType = {

}
const Friend:FC<PropsType> = (props) => {
    return (
            <div className={s.friend}>
                <div>
                    <img alt="avatar" src='https://www.w3schools.com/w3css/img_avatar3.png'/>
                </div>
                <div>
                    Name
                </div>

            </div>
    )
}

export default Friend;