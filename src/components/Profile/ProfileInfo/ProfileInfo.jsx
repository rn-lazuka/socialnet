import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";



const ProfileInfo = ({profile,status,updateUserStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return <div>
        <div className={s.descriptionBlock}>
            <img alt={'#'} src={profile.photos.large}/>
            <ProfileStatusWithHooks updateUserStatus={updateUserStatus}
                           status={status}/>
            <div>Имя:{profile.fullName}</div>
            <div>Обо мне:{profile.aboutMe}</div>
            <div>Контакты:<a href={'https://' + profile.contacts.vk}>{profile.contacts.vk}</a></div>

        </div>

    </div>
};

export default ProfileInfo