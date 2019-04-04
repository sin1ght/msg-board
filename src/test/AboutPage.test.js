import React from 'react';
import ReactDOM from 'react-dom';
import AboutPage from '../components/AboutPage';


it('test AboutPage', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AboutPage />, div);
    ReactDOM.unmountComponentAtNode(div);
});
  