import React, { Component } from 'react';
import '../css/CommentItem.scss';


class CommentItem extends Component{

    handleCommentReply=(e)=>{
        console.log(this.props.comment._id);
        this.props.onCommentReply(this.props.comment._id);
        let item=document.querySelector('.comment-input');
        window.scrollTo(0, item.offsetTop);
    }

    render(){

        let reply_info=null;
        if(this.props.comment.pid!=0){
            reply_info=(<span>回复&nbsp;<span className="reply_nickname">{
                this.props.comment.parent_nickname
            }</span>:&nbsp;</span>)
        }

        return (
            <div className="comment-item">
                <div className="header">
                    <div className="avatar">
                        <img src={this.props.comment.avatar}/>
                    </div>
                    <div className="info">
                         <p>{this.props.comment.nickname}</p>
                         <p>{this.props.comment.time}</p>
                    </div>
                </div>
                <div className="body">
                    {reply_info}
                    {this.props.comment.content}
                </div>

                <div className="action">
                    <span onClick={this.handleCommentReply}>回复</span>
                </div>

                <div className={this.props.comment.replys.length&&'reply-comments'}>
                    {
                        this.props.comment.replys.map((item,index)=>{
                            return <CommentItem comment={item} key={index} onCommentReply={this.props.onCommentReply}/>
                        })
                    }
                </div>    
                
            </div>
        );
    }
}


export default CommentItem;