import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props) => {
   let posts=props.posts;

    return <div className={s.content}>
        <ProfileInfo/>
        <MyPosts posts={posts}/>
    </div>
}

export default Profile;