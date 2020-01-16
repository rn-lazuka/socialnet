import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios'
import userPhoto from '../../assets/images/user.png'

class Users extends React.Component {
    constructor(props) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render() {
        return <div>
            {
                this.props.users.map(u => <div key={u.id} className={s.user}>
            <span>
                 <div>
                     <img alt={'#'} src={u.photos.small != null ? u.photos.small : userPhoto} className={s.photo}/>
                 </div>
                 <div>
                     {u.followed ? <button onClick={() => this.props.onUnFollowClick(u.id)}>Unfollow</button> :
                         <button onClick={() => this.props.onFollowClick(u.id)}>Follow</button>}
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
    }
};

export default Users;