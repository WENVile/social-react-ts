import React from 'react';
import {Post} from './Post/Post'
import style from './MyPosts.module.css';

export function MyPosts() {
    return (
        <div>
            my-posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>

            <div className={style.posts}>
                <Post postMessage={'Hi, how are you'}/>
                <Post postMessage={'Hello'} />
                <Post postMessage={'Bye'} />
            </div>
        </div>
    )
}