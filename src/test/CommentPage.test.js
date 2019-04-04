import React from 'react';
import ReactDOM from 'react-dom';
import CommentPage from '../components/CommentPage';


it('test CommentPage', () => {
    let testCommentpage={
        comments:[],
        comment_pre_id:0
    }

    const div = document.createElement('div');
    ReactDOM.render(<CommentPage commentPage={testCommentpage}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  