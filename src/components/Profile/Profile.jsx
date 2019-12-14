import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile = () => {
    let posts = [
        {message: 'Вжух вжух вжух, мечи воздух рассекают', likeCount: 999},
        {message: 'Great, we can go next step!', likeCount: 17},
        {message: 'Памагити йа не мэсный', likeCount: 0},
        {message: 'Кто-нибудь, убейте его словарем!', likeCount: 666}
    ];

    return <div className={s.content}>
        <ProfileInfo/>
        <MyPosts posts={posts}/>
    </div>
}

export default Profile;