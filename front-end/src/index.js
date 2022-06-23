import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  Home  from "./components/Home"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import About from "./components/About"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Router>
  <Navigation />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
  <Footer />
  </Router>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
