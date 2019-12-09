import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return <div className={s.content}>
        <div className={s.pic}>
            <img src='https://www.pond5.com/images/images_db/vlp/image-hero-poster.jpg'/>
        </div>
        <div>
            ava+description
        </div>
        <MyPosts/>
    </div>
}

export default Profile;