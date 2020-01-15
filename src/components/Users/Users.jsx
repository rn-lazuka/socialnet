import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios'
import userPhoto from '../../assets/images/user.png'

const Users = (props) => {
    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response=>{

            props.setUsers(response.data.items)});
    }
    return (

        props.users.map(u =>
            <div key={u.id} classname={s.user}>
                <span>
                 <div>
                   <img src={u.photos.small !=null? u.photos.small: userPhoto} className={s.photo}/>
                  </div>
                  <div>
                        {u.followed ? <button onClick={() => props.onUnFollowClick(u.id)}>Unfollow</button> :
                            <button onClick={() => props.onFollowClick(u.id)}>Follow</button>}
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
    )
};

export default Users;