import React, { Component } from 'react';
import '../css/CommentInput.scss';
import {Button,Alert} from 'react-bootstrap';
import db from '../db'
import {getFormatTimeNow,md5} from '../utils'

class CommentInput extends Component{

    constructor(props){
        super(props);
        this.state={
            comment:{
                nickname:'',
                email:'',
                homepage:'',
                content:''
            },
            info:'',
            wrong:false,
            submitSuccess:false,
        };
    }

    handleSubmit=()=>{
        let comment=this.state.comment;
        let info='';
        this.setState({info:''});

        if(comment.nickname.trim() == ''){
            info+='昵称不能为!';
        }

        if(!new RegExp('^[0-9a-zA-Z]+@[0-9a-z]+\.[a-z]+$','g').test(comment.email.trim())){
            info+='非法邮箱!';
        }

        if(comment.content.trim() == ''){
            info+='留言内容不能为空!';
        }

        if(info==''){
            this.props.onCanselReply(0);//取消回复提示
            this.setState({wrong:false,submitSuccess:true});
            setTimeout(()=>{
                this.setState({submitSuccess:false});//一秒后让提示信息消失
            },1000);
             //提交到数据库
             let newComment={
                _id:Date.now()+'',
                pid:this.props.commentPreId,
                nickname:this.state.comment.nickname,
                time:getFormatTimeNow(),
                avatar:'https://s.gravatar.com/avatar/'+md5(this.state.comment.email)+'?s=80&d=monsterid',
                content:this.state.comment.content,
                replys:[]
            }

            if(this.props.commentPreId==0){
                db.remoteDB.put(newComment);
                this.props.onCommentAdd(newComment);
            }else{
                db.remoteDB.get(this.props.commentPreId).then((parent)=>{
                    newComment.parent_nickname=parent.nickname;
                    db.remoteDB.put(newComment);
                    this.props.onCommentAdd(newComment);
                });
            }
            
        }else{
            this.setState({info:info});
            this.setState({wrong:true});
        }
    }

    handleNameInput=(e)=>{
        let obj=Object.assign({},this.state.comment,{nickname: e.target.value});
        this.setState({comment:obj});
    }

    handleEmailInput=(e)=>{
        let obj=Object.assign({},this.state.comment,{email: e.target.value});
        this.setState({comment:obj});
    }

    handleHomepageInput=(e)=>{
        let obj=Object.assign({},this.state.comment,{homepage: e.target.value});
        this.setState({comment:obj});
    }

    handleContentInput=(e)=>{
        let obj=Object.assign({},this.state.comment,{content: e.target.value});
        this.setState({comment:obj});
    }

    render(){

        let alert=null;//提交失败信息
        let info=null;//提交成功信息
        let reply=null;//是否回复
        if(this.state.wrong){
            alert=<Alert variant="danger">{this.state.info}</Alert>;
        }

        if(this.state.submitSuccess){
            info=<Alert variant="success">发表成功!</Alert>;
        }

        if(this.props.commentPreId!=0){
            reply=<p className="cancel-reply" onClick={(e)=>{this.props.onCanselReply(0)}}>点击这里取消回复</p>;
        }

        return (
            <div className="comment-input">
                {reply}
                <div className="labels">
                    <p>昵称<span>*</span></p>
                    <p>邮箱<span>*</span></p>
                    <p>网址</p>
                </div>
                <div className="inputs">
                    <input type="text" onChange={this.handleNameInput} placeholder="sinight"></input>
                    <input type="email" onChange={this.handleEmailInput} placeholder="example@qq.com"></input>
                    <input type="text" onChange={this.handleHomepageInput} placeholder="http://"></input>
                </div>

                {alert}
                {info}

                <textarea rows="5" onChange={this.handleContentInput} placeholder="留下点什么吧~"></textarea>
                <Button variant="info" onClick={this.handleSubmit}>留下足迹</Button>
            </div>
        );
    }
}


export default CommentInput;