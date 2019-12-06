import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
            <div className={s.item}>
                <img src='https://www.w3schools.com/w3css/img_avatar3.png'/>
                post1
                <div>
                    <span>
                        like
                    </span>
                </div>
            </div>
    )
}

export default Post;