import {addDialogPost} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect, DefaultRootState} from "react-redux";
import {withAuthRedirect} from "../../hok/withAuthRedirect";
import {compose} from "redux";
import {DialogMessageType, DialogType} from "../../types/types";
import {AppStateType} from "../../Redux/redux-store";

type MapStatePropsType = {

    dialogs: Array<DialogType>
    messages: Array<DialogMessageType>

}
type MapDispatchPropsType = {
    addDialogPost: (message:string) => void
}


let mapStateToProps =(state:AppStateType):MapStatePropsType=>{
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
    }
};


export default compose (
    connect<MapStatePropsType, MapDispatchPropsType, {},AppStateType> (mapStateToProps,{addDialogPost}),
    withAuthRedirect
)(Dialogs)
