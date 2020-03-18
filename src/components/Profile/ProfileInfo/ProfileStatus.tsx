import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css';

type PropsType = {
    status: string
    updateUserStatus: (status: string) => void
}
type StateType = {
    editMode: boolean
    status: string
}

class ProfileStatus extends React.Component<PropsType,StateType> {
    state = {
        editMode: false,
        status: this.props.status
    };
    activateEditMode = () => {
        this.setState({editMode: true})
    };
    deActivateEditMode = () => {
        this.setState({editMode: false});
        this.props.updateUserStatus(this.state.status);
    };
    onStatusChanged = (e:ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }

    render() {
        return (
            <div>
                {!this.state.editMode ?
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "No status"}</span>
                    </div>
                    :
                    <div>
                        <input onChange={this.onStatusChanged} onBlur={this.deActivateEditMode} autoFocus={true}
                               value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }
};

export default ProfileStatus;