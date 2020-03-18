import React, {useState, useEffect, FC, ChangeEvent} from 'react';

type PropsType = {
    status:string
    isOwner:boolean
    updateUserStatus:(status:string)=>void
}

const ProfileStatusWithHooks:FC<PropsType> = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(():void => {
        setStatus(props.status)
    }, [props.status]);

    let activateEditMode = ():void => {
        setEditMode(true)
    };
    let onStatusChanged = (e: ChangeEvent<HTMLInputElement>):void => {
        setStatus(e.currentTarget.value);
    };
    let deActivateEditMode = ():void => {
        props.updateUserStatus(status);
        setEditMode(false)
    };
    return (
        <div>
            {props.isOwner ?
                !editMode ?
                    <div>
                        <b>Status:</b> <span onDoubleClick={activateEditMode}>{status || "No status"}</span>
                    </div>
                    :
                    <div>
                        <input onChange={onStatusChanged} onBlur={deActivateEditMode} autoFocus={true}
                               value={status}/>
                    </div>
                :
                <div>
                    <b>Status:</b> <span>{status || "No status"}</span>
                </div>
            }
        </div>
    )
};
export default ProfileStatusWithHooks;