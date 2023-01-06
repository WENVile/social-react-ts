import React from 'react';
import style from './Header.module.css';
import logo from "../../img/logo.jpg";

export function Header() {
    return (
        <header className={style.header}>
            <img src={logo} alt="social logo"/>
        </header>
    )
}