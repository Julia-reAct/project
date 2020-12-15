import React from 'react'
import {connect} from "react-redux";
import { addCommentsPeople} from "../../Redux/Reducer";
import Comments from "./Comments";
import s from './AddComments.module.css'


class AddComment extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        this.props.addCommentsPeople( this.state.value);
        event.preventDefault();
    }

    render() {
        let allcomments = this.props.comments.map(c => <Comments
            key={c.id} name={c.name} data={c.data} text={c.text}/>)

        return (
            <div>
                <div className={s.informcomments}>
                    <div className={s.lastcomment}>Последние отзывы</div>
                    <div className={s.comments}> Все отзывы</div>
                    <div className={s.heart}></div>
                    <div className={s.like}>131</div>
                    <div className={s.arrow_box}></div>
                    <div className={s.like}> 14</div>
                </div>
                <div>{allcomments}</div>
                <div>
                    <form onSubmit={this.handleSubmit} className={s.form}>
                        <textarea onChange={this.handleChange} className={s.textarea}/>
                        <button className={s.button}>
       <span className={s.textbutton}>
         Написать консультанту
         </span>
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    comments: state.commentspage.comments,
})

export default  connect (mapStateToProps, {addCommentsPeople}) (AddComment)
