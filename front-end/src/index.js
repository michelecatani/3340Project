/* This is the main file. Basically, in here is where we set our routes to everywhere else.  That starts inside the
root.render() function. We also do all of our necessary imports, including our stylesheet which will style the entirety of our app. */

import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  Home  from "./components/Home"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import About from "./components/About"
import Items from "./components/Items"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // Router allows us to have routes.
  // Include our nav bar, our routes, then our footer.

  <Router>
    <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/items" element={<Items />} />
      </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
