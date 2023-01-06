import React from 'react';
import style from './Post.module.css';
import avatar from "../../../../img/avatar.jpg";

type MessagePostPropsType = {
    postMessage: string;
}
export function Post(props: MessagePostPropsType) {
    return (
        <div className={style.item}>
            <img src={avatar} alt="avatar"/>
            <span>{props.postMessage}</span>
        </div>
    )
}