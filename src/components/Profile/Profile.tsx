import React, {FC} from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../types/types";

type PropsType = {
    isOwner:boolean
    profile:ProfileType
    status:string
    savePhoto:()=>void
    saveProfile:()=>void
    updateUserStatus:()=>void
}

const Profile:FC<PropsType> = (props) => {
    return <div className={s.content}>
        <ProfileInfo savePhoto={props.savePhoto}
            profile={props.profile}
                     isOwner={props.isOwner}
                     status={props.status}
                     updateUserStatus={props.updateUserStatus}
                     saveProfile={props.saveProfile}
        />
        <MyPostsContainer />
    </div>
};

export default Profile;