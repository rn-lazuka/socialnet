import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    let posts = [
        {message: 'Вжух вжух вжух, мечи воздух рассекают', likeCount: 999},
        {message: 'Great, we can go next step!', likeCount: 17},
        {message: 'Памагити йа не мэсный', likeCount: 0},
        {message: 'Кто-нибудь, убейте его словарем!', likeCount: 666}
    ]
    let postsElements = posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>)

    return (
        < div className={s.postBlock}>
            < h3> My posts < /h3>
                <div>
                    <div>
                        <textarea> </textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>
                < div className={s.posts}>
                    {postsElements}
                </div>
        </div>
)
}

export default MyPosts;