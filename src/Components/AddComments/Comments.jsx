import React from 'react'
import s from './Comments.module.css'


const Comments = (props)=> {
    return (
        <div >
            <div className={s.grid}>
            <div className={s.name}>{props.name}</div>
            <div className={s.data}>  {props.data}</div>
            </div>
            <div className={s.arrow_box}> <div className={s.text}> {props.text} </div></div>
        </div>
    );
}

export default Comments;