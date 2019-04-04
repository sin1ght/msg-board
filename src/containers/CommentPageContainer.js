import { connect } from 'react-redux';
import CommentPage from '../components/CommentPage';



//初始化 获取留言列表
const commentInitAction=comments=>{
  return{
    type:'Comment_Init',
    comments
  }
}

//发表新的留言
const commentAddAction=newComment=>{
    return {
        type:'Comment_Add',
        newComment
    }
}
//设置留言的父级id
const commentSetPreIdAction=predID=>{
  return {
      type:'Comment_Set_Pre_Id',
      pre_id:predID
  }
}


const mapStateToProps = state => {
    return {
      commentPage:state.commentPage
    }
}


const mapDispatchToProps = dispatch => {
    return {
      onCommentAdd: comment => {
        dispatch(commentAddAction(comment))
      },
      onCommentSetPreId:pid=>{
        dispatch(commentSetPreIdAction(pid))
      },
      onCommentInit:(comments)=>{
        dispatch(commentInitAction(comments))
      }
    }
}

const CommentPageContainer=connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentPage);


export default CommentPageContainer;