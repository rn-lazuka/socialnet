import React, {FC} from 'react';
import s from './Settings.module.css';

type PropsType = {

}
const Settings:FC<PropsType> = (props) => {
    return (
        <div className={s.container}>
            Settings
        </div>
    )
}

export default Settings;