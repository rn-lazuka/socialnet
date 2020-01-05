import React from 'react';
import s from './ProfileInfo.module.css';



const ProfileInfo = (props) => {
    return <div>
        <div className={s.pic}>
            <img alt={"background"} src='https://www.pond5.com/images/images_db/vlp/image-hero-poster.jpg'/>
        </div>
        <div className={s.descriptionBlock}>
            ava+description
        </div>

    </div>
};

export default ProfileInfo;