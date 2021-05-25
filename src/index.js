import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import rootReducer from './reducers';
import './index.css';
import Header from "./Header";
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router
}
from 'react-router-dom';
import Main from "./Main";
import SwitchGame from "./Switch";

// const store = createStore(rootReducer);

ReactDOM.render(

  <Router>
    <Header />
    <SwitchGame />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
