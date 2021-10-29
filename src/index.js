import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import App from './App';
import './customStyle.css';

axios.defaults.baseURL = 'http://laravel-react-auth.herokuapp.com/api/';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem( 'token' );

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
