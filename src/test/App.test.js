import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import store from '../store'
import { Provider } from 'react-redux'



it('test App', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  