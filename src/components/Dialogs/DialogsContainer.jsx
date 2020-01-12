import React from 'react';
import {addDialogPostActionCreator, onMessageChangeActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../storeContext";

const DialogsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let state = store.getState();

                    let addDialogPost = () => {
                        store.dispatch(addDialogPostActionCreator());
                    };
                    let onMessageChange = (text) => {
                        store.dispatch(onMessageChangeActionCreator(text))
                    };
                    return (
                        <Dialogs addDialogPost={addDialogPost}
                                     onMessageChange={onMessageChange}
                                     dialogs={state.dialogsPage.dialogs}
                                     messages={state.dialogsPage.messages}
                                     newMessageText={state.dialogsPage.newMessageText}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    )
};
export default DialogsContainer;