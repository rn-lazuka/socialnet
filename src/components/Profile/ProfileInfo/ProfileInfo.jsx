import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";



const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return <div>
        {/*<div className={s.pic}>*/}
        {/*</div>*/}
        <div className={s.descriptionBlock}>
            <img alt={'#'} src={props.profile.photos.large}/>
            <ProfileStatusWithHooks updateUserStatus={props.updateUserStatus}
                           status={props.status}/>
            <div>Имя:{props.profile.fullName}</div>
            <div>Обо мне:{props.profile.aboutMe}</div>
            <div>Контакты:<a href={'https://' + props.profile.contacts.vk}>{props.profile.contacts.vk}</a></div>

        </div>

    </div>
};

export default ProfileInfo