import React from 'react';
import s from './Users.module.css';


const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRloruZAb-yoDnwuI1cUnNxt0ECY0zKEMzmMBLLQ-Ogicnu4RFmUA&s',
                    followed: false,
                    fullName: 'Roman',
                    status: 'front-end',
                    location: {country: 'Belarus', city: 'Minsk'}
                },
                {
                    id: 2,
                    photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRloruZAb-yoDnwuI1cUnNxt0ECY0zKEMzmMBLLQ-Ogicnu4RFmUA&s',
                    followed: true,
                    fullName: 'Dimych',
                    status: 'sensei programmer',
                    location: {country: 'Belarus', city: 'Minsk'}
                },
                {
                    id: 3,
                    photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRloruZAb-yoDnwuI1cUnNxt0ECY0zKEMzmMBLLQ-Ogicnu4RFmUA&s',
                    followed: true,
                    fullName: 'Valentin',
                    status: 'born to be head of sales',
                    location: {country: 'Belarus', city: 'Minsk'}
                },
                {
                    id: 4,
                    photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRloruZAb-yoDnwuI1cUnNxt0ECY0zKEMzmMBLLQ-Ogicnu4RFmUA&s',
                    followed: false,
                    fullName: 'Kristina',
                    status: 'pinky pony',
                    location: {country: 'Ukraine', city: 'Kiev'}
                }
            ]
        )
    }
    return (

        props.users.map(u =>
            <div key={u.id} classname={s.user}>
                <span>
                 <div>
                   <img src={u.photoURL} className={s.photo}/>
                  </div>
                  <div>
                        {u.followed ? <button onClick={() => props.onUnFollowClick(u.id)}>Unfollow</button> :
                            <button onClick={() => props.onFollowClick(u.id)}>Follow</button>}
                  </div>
              </span>
                <span>
                    <div>
                        {u.fullName}
                    </div>
                    <div>
                        {u.status}
                    </div>
                </span>
                <span>
                     <div>
                        {u.location.country}
                     </div>
                     <div>
                         {u.location.city}
                     </div>
                </span>
            </div>)
    )
};

export default Users;