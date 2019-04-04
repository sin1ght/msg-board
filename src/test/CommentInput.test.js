import React from 'react';
import ReactDOM from 'react-dom';
import CommentInput from '../components/CommentInput';

it('test CommentInput', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CommentInput  commentPreId={0}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
