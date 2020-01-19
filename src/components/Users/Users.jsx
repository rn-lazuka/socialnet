import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.png'
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id} className={s.user}>
            <span>
                 <div>
                     <NavLink to={'/profile/' + u.id}>
                     <img alt={'#'} src={u.photos.small != null ? u.photos.small : userPhoto} className={s.photo}/>
                     </NavLink>
                 </div>
                 <div>
                     {u.followed ?
                         <button onClick={() => {
                             props.onUnFollowClick(u.id, props.unfollow)
                         }
                         }>Unfollow</button> :

                         <button onClick={() => {
                             props.onFollowClick(u.id, props.follow)
                         }
                         }>Follow</button>
                     }
                 </div>
            </span>
                <span>
                <div>
                    {u.name}
                </div>
                <div>
                    {u.status}
                </div>
            </span>
                <span>
                <div>
                    {"u.location.country"}
                </div>
                <div>
                    {"u.location.city"}
                </div>
            </span>
            </div>)
        }
    </div>

};

export default Users;