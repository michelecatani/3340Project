/* This is our about page. Right now, it's simply a test to an api endpoint of our Flask back-end.  It returns our names.
The JSON object with out names is accessible in ../../../back-end/flaskServer/auth.py */

import React from "react";
import { useState, useEffect } from "react";

function About() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_HOST}/auth/ourNames`).then((res) =>
      res.json().then((data) => {
        setData(data);
        console.log(data);
      })
    );
  }, []);

  // this below needs to be changed, it's just a sample from what we had when we were demonstrating 
  // how to get stuff from BE to FE

  return (
    <div>
      {typeof data.ourNames === "undefined" ? (
        <p>Loading...</p>
      ) : (
        data.ourNames.map((name, i) => <p key={i}>{name}</p>)
      )}
    </div>
  );
}

export default About;
