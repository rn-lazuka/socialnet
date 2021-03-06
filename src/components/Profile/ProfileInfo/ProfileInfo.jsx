import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png"
import ProfileDataForm from "./ProfileDataForm";
import UploadButton from "../../common/PhotoUpload/UploadButton";


const ProfileInfo = ({profile, status, updateUserStatus, isOwner, savePhoto, saveProfile}) => {
    let [editMode, setEditMode] = useState(false);
    if (!profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    };

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        )
    };


    return <div>
        <div className={s.descriptionBlock}>

            <div style={{
                backgroundImage: `url(${profile.photos.large || userPhoto})`
            }} className={s.mainPhoto}>
                {isOwner && <div className={s.buttonPhoto}><UploadButton onChange={onMainPhotoSelected}/></div>}
            </div>
            <div className={s.status}>
            <ProfileStatusWithHooks updateUserStatus={updateUserStatus}
                                    isOwner={isOwner}
                                    status={status}/>
            </div>
            <div className={s.description}>
                {editMode ? <ProfileDataForm profile={profile} onSubmit={onSubmit} initialValues={profile}/> :
                    <ProfileData profile={profile} goToEditMode={() => {
                        setEditMode(true)
                    }} isOwner={isOwner}/>}
            </div>

        </div>

    </div>
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <div>
            <button onClick={goToEditMode}>Edit</button>
        </div>}
        <div><b>Full name:</b> {profile.fullName}</div>
        <div><b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}</div>
        {profile.lookingForAJobDescription !== null ?
            <div><b>My skills:</b> {profile.lookingForAJobDescription}</div> : ""}
        <div><b>About me:</b> {profile.aboutMe}</div>

        <div><b>Contacts:</b> {Object.keys(profile.contacts).map(key => {if (profile.contacts[key] !== "" && profile.contacts[key] !== null) {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            }
        })}
        </div>

        {/*<div>*/}
        {/*    <b>Contacts:</b> <a href={'https://' + profile.contacts.vk}>{profile.contacts.vk}</a>*/}
        {/*</div>*/}
    </div>
};

const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}:</b> <a target={'_blank'}
                                                                href={contactValue}> {contactValue}</a></div>
};

export default ProfileInfo