import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import Post from "./MyPosts/Post/Post";

const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src='https://www.pond5.com/images/images_db/vlp/image-hero-poster.jpg'/>
        </div>
        <div>
            ava+description
        </div>
        <MyPosts/>
    </div>
}

export default Profile;