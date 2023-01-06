import React from 'react';
import style from './Navigation.module.css'

export function Navigation() {
    return (
        <nav className={style.nav}>
            <div className={style.item}><a href="src/components#">Profile</a></div>
            <div className={style.item}><a href="src/components#">Messages</a></div>
            <div className={style.item}><a href="src/components#">News</a></div>
            <div className={style.item}><a href="src/components#">Music</a></div>
            <div className={style.item}><a href="src/components#">Settings</a></div>
        </nav>
    )
}