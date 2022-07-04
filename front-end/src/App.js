/* This is the app file. Basically, in here is where we set our routes to everywhere else. */

import React from 'react';
import "./index.css";
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  Home  from "./components/Home"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import About from "./components/About"
import Items from "./components/Items"
import Login from "./components/Login"
import Register from "./components/Register"
import useToken from './components/UseToken';

function App() {
  const { token, removeToken, setToken } = useToken();

  // down here are all of our routes.  Token, removeToken, setToken are functions to control the tokens that our user will have

  return (
    <BrowserRouter>
      <div className="App">
      <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/items" element={<Items />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        {!token && token!=="" && token !== undefined?
        <Login path="/login" setToken={setToken}/>
        :(
          <>
          <Routes>
            {/* in here will be all the routes that will be accessible only if logged in */}
          </Routes>
          </>
        )}
      </div>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;