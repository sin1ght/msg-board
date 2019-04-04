import { combineReducers } from 'redux';
import { createStore,applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';


//对action进行处理
//对留言板相关的处理
const commentPageState={
    comments:[],
    comment_pre_id:0
};

function handleCommentsReducer(state=commentPageState,action){
    switch(action.type){
        case 'Comment_Init':
            return Object.assign({},state,{comments:action.comments});
        case 'Comment_Add':
            let new_comment=action.newComment;
            let comments=null;
            if(new_comment.pid==0){
                comments=[].concat(action.newComment,state.comments);
            }else{
                //回复留言
                for(let parent of state.comments){
                    if(new_comment.pid==parent._id){
                        parent.replys.unshift(new_comment);
                        break;
                    }                    
                    if(parent.replys.some((item)=>{return item._id == new_comment.pid;})){
                        parent.replys.unshift(new_comment);
                        break;
                    }
                }
                comments=[...state.comments];
            }
            return Object.assign({},state,{comments:comments});
        case'Comment_Set_Pre_Id':
            return Object.assign({},state,{comment_pre_id:action.pre_id});
        default:
            return state;
    }
}


const reducer=combineReducers({
    commentPage:handleCommentsReducer
});


const store=createStore(reducer,composeWithDevTools());


export default store;