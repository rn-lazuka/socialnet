import React from 'react';
import s from './Dialogs.module.css';


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                    <div className={s.dialog + ' '+ s.active}>Pasha</div>
                    <div className={s.dialog}>Nick</div>
                    <div className={s.dialog}>Oleg</div>
                    <div className={s.dialog}>Rob</div>
                    <div className={s.dialog}>Bob</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}> Hi!</div>
                <div className={s.message}> How is your way to samurai?</div>
                <div className={s.message}> great work</div>
            </div>
        </div>

    )
}

export default Dialogs;