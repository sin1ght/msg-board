import React from 'react';
import ReactDOM from 'react-dom';
import CommentItem from '../components/CommentItem';

it('test CommentItem', () => {
  let testComment={
    "_id": "1554353169731",
    "_rev": "1-955b13eae8aef8a6adfa4d486bcb9042",
    "pid": 0,
    "nickname": "Tom",
    "time": "2019-04-04 12:46",
    "avatar": "https://s.gravatar.com/avatar/27ea0365c12e86d625a8338dcd86ec56?s=80&d=monsterid",
    "content": "helloworld",
    "replys": []
  }

  const div = document.createElement('div');
  ReactDOM.render(<CommentItem  comment={testComment}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
