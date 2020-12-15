import React from 'react'
import {connect} from "react-redux";
import { addCommentsPeople} from "../../Redux/Reducer";
import Comments from "./Comments";
import s from './AddComments.module.css'


const AddComments = (props)=> {

    let allcomments =props.comments.map(c=> <Comments
        key={c.id} name={c.name} data={c.data} text={c.text} />)

    let newComments= React.createRef()

    let addComments=()=>{
        let text = newComments.current.value
        props.addCommentsPeople(text)
    }
    return (
        <div >
            <div className={s.informcomments}>
                <div className={s.lastcomment}>Последние отзывы</div>
                <div  className={s.comments}> Все отзывы</div>
                <div className={s.heart}></div>
                <div className={s.like}>131  </div>
                <div className={s.arrow_box}> </div>
                <div  className={s.like}> 14 </div>
            </div>
            <div>{allcomments}</div>
            <div>
                <form  className={s.form}>
                    <textarea  ref={newComments} className={s.textarea} />
                    <button onClick={addComments} className={s.button}>
       <span className={s.textbutton}>
         Написать консультанту
         </span>
                    </button>
                </form>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => ({
    comments: state.commentspage.comments,
})

export default  connect (mapStateToProps, {addCommentsPeople}) (AddComments)
