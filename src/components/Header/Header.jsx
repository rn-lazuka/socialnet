import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import Login from "../Login/Login";


const Header = (props) => {

        return <header className={s.header}>
        <img alt="logo" src='https://www.vetter.fi/wp-content/uploads/2019/05/logo-ex-3.png'/>
        <div className={s.loginBlock}>
                {props.isAuth? props.login:
        <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>;
}

export default Header;