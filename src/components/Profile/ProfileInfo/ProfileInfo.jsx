import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";



const ProfileInfo = (props) => {
    if (!props.profile){
return  <Preloader/>
    }
    return <div>
        <div className={s.pic}>

        </div>
        <div className={s.descriptionBlock}>
            <img alt={'#'} src={props.profile.photos.large}/>
            <div>Имя:{props.profile.fullName}</div>
            <div>Обо мне:{props.profile.aboutMe}</div>
            <div>Контакты:<a href={props.profile.contacts.vk}>VK</a></div>

        </div>

    </div>
};

export default ProfileInfo;