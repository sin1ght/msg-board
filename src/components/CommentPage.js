import React, { Component } from 'react';
import CommentItem from './CommentItem';
import CommentInput from './CommentInput';
import db from '../db';
import '../css/CommentPage.scss'


class CommentPage extends Component{

    componentDidMount(){
        //获取留言列表
        db.remoteDB.allDocs({include_docs: true}).then(function (data) {
            let comments=[];
            let replyComments=[]; 
            data.rows.forEach((item) => {
                let doc=item.doc;
                doc.replys=[];
                if(doc.pid==0){
                    comments.push(doc);
                }else{
                    replyComments.push(doc);
                }
            });

            //将所有回复评论放到合适的元素下
            for(let child of replyComments){
                for(let parent of comments){
                    if(child.pid==parent._id){
                        parent.replys.unshift(child);
                        break;
                    }                    
                    if(parent.replys.some((item)=>{return item._id == child.pid;})){
                        parent.replys.unshift(child);
                        break;
                    }
                }
            }
            this.props.onCommentInit(comments.reverse());
        }.bind(this));
    
    }

    render(){
        return (
            <div className="comment-page">
                <div className="comment-list">
                    <header>留言板</header>
                    <div>
                    {
                        this.props.commentPage.comments.map((item,index)=>{
                            return <CommentItem comment={item} key={index} onCommentReply={this.props.onCommentSetPreId}/>;
                        })
                    }
                    </div>
                </div>

                <CommentInput onCommentAdd={this.props.onCommentAdd} commentPreId={this.props.commentPage.comment_pre_id} onCanselReply={this.props.onCommentSetPreId}/>
            </div>
        );
    }
}


export default CommentPage;