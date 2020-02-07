import React, {useState,useEffect} from 'react';


const ProfileStatusWithHooks  =(props)=>{

 let [editMode,setEditMode] = useState(false);
 let [status,setStatus] = useState(props.status);

 useEffect (()=>{setStatus(props.status)},[props.status]);

 let activateEditMode=()=>{
     setEditMode(true)
 };
 let onStatusChanged=(e)=>{
     setStatus(e.currentTarget.value);
 };
 let deActivateEditMode=()=>{
     props.updateUserStatus(status);
     setEditMode(false)
 };
        return (
            <div>
                {!editMode ?
                    <div>
                       <b>Status:</b> <span onDoubleClick={activateEditMode}>{status || "No status"}</span>
                    </div>
                    :
                    <div>
                        <input onChange={onStatusChanged} onBlur={deActivateEditMode} autoFocus={true} value={status}/>
                    </div>
                }
            </div>
        )
};
export default ProfileStatusWithHooks;