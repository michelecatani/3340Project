/* This is the main file. Basically, in here is where we set our routes to everywhere else.  That starts inside the
root.render() function. We also do all of our necessary imports, including our stylesheet which will style the entirety of our app. */

import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
