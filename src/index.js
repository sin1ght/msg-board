import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/scss/font-awesome.scss'

import './css/index.css';
import App from './components/App';

import store from './store'
import { Provider } from 'react-redux'



ReactDOM.render(
<Provider store={store}>
   <App/>
</Provider>, 
document.getElementById('root'));


