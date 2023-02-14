import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // * BrowserRouter 불러오기
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootNode = document.getElementById('root');
// * App 을 BrowserRouter 로 감싸기
ReactDOM.createRoot(rootNode).render(
  <BrowserRouter>
  <React.StrictMode>
    <App/>
  </React.StrictMode>
</BrowserRouter>
);

reportWebVitals();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

