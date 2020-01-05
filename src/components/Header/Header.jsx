import React from 'react';
import s from './Header.module.css';


const Header = (props) => {

        return <header className={s.header}>
        <img alt="logo" src='https://www.vetter.fi/wp-content/uploads/2019/05/logo-ex-3.png'/>
    </header>;
}

export default Header;