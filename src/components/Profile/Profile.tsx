import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import style from './Profile.module.css'
import wrapp from "../../img/wrapp.png";

export function Profile() {
    return (
        <section className={style.content}>
            <div><img src={wrapp} alt="wrapp" width='100%'/></div>
            <div>ava+description</div>

         <MyPosts/>

        </section>
    )
}