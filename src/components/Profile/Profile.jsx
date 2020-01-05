import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = (props) => {


    return <div className={s.content}>
        <ProfileInfo/>
        <MyPosts addPost={props.addPost}
                 updateNewPostText={props.updateNewPostText}
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}/>
    </div>
}

export default Profile;