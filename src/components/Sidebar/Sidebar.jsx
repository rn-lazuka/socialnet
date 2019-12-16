import React from 'react';
import s from './Sidebar.module.css';
import Friend from "./Friends/Friend";


const Friends = (props) => {
    return (
        <div>
            <div>
                Friends
            </div>
         <div className={s.friendItem}>
             <Friend/>
             <Friend/>
             <Friend/>
             <Friend/>
             <Friend/>
         </div>

        </div>

    )
}

export default Friends;