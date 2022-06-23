/* This is our about page. Right now, it's simply a test to an api endpoint of our Flask back-end.  It returns our names.
The JSON object with out names is accessible in ../../../back-end/flaskServer/auth.py */

import React from "react";
import { useState, useEffect } from 'react';

function About() {
    const [data, setData] = useState([{}])

    useEffect(() => {
        fetch("/ourNames").then(
          res => res.json()
        .then(
          data => {
            setData(data)
            console.log(data)
          }
        )
    )}, []);
  
    return (
      <div>
        {(typeof data.ourNames === 'undefined') ? (
          <p>Loading...</p>
        ) : (
          data.ourNames.map((name, i) => (
            <p key={i}>{name}</p>
          ))
        )}
      </div>
    )
}

export default About;