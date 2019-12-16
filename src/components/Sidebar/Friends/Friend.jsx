import React from 'react';
import s from './Friend.module.css';


const Friend = (props) => {
    return (
            <div className={s.friend}>
                <div>
                    <img src='https://www.w3schools.com/w3css/img_avatar3.png'/>
                </div>
                <div>
                    Name
                </div>

            </div>
    )
}

export default Friend;