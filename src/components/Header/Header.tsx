import React, {FC} from 'react';
import s from './Header.module.css';
import {NavLink, Redirect} from "react-router-dom";


type PropsType = {
    isAuth:boolean
    login:string|null
    logout:()=>void
}

const Header:FC<PropsType> = (props) => {

    return <header className={s.header}>
        <img alt="logo" src='https://www.vetter.fi/wp-content/uploads/2019/05/logo-ex-3.png'/>

        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
                : <><NavLink to={'/login'}>Login</NavLink><Redirect to={"/login"}/></>
            }
        </div>

    </header>;
}

export default Header;