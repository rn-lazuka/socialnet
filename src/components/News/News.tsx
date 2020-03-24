import React, {FC} from 'react';
import s from './News.module.css';

type PropsType = {

}
const News:FC<PropsType> = (props) => {
    return (
        <div className={s.container}>
            News
        </div>
    )
}

export default News;