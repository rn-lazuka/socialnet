import React from 'react';
import s from './Header.module.css';
import {NavLink, Redirect} from "react-router-dom";



const Header = (props) => {

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