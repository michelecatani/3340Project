/* This is our about page. Right now, it's simply a test to an api endpoint of our Flask back-end.  It returns our names.
The JSON object with out names is accessible in ../../../back-end/flaskServer/auth.py */

import { Container } from "@mui/material";
import React from "react";

function About() {

  // this below needs to be changed, it's just a sample from what we had when we were demonstrating 
  // how to get stuff from BE to FE

  return (
    <Container>
      <h1>About</h1>
      <p>Neobay is an auction website created by students at the University of Windsor for our web development class. more stuff ...</p>
    </Container>
  );
}

export default About;
