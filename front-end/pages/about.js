/* This is our about page. Right now, it's simply a test to an api endpoint of our Flask back-end.  It returns our names.
The JSON object with out names is accessible in ../../../back-end/flaskServer/auth.py */

import { Container } from "@mui/material";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Divider from "@mui/material/Divider";

function About() {
  return (
    // added some padding around whole page
    <div style={{ padding: "3%" }}>
      {/* Header for About Us */}
      <Typography
        color="black"
        variant="h5"
        sx={{ pb: 4 }}
        style={{ fontWeight: "bold" }}
        align="center"
      >
        ABOUT US
      </Typography>

      {/* Divider to seperate content */}
      <Divider dark />

      <Typography sx={{ pb: 3 }}>
        Neobay is an auction website created by students at the University of
        Windsor for our COMP3340 web development class.

        <br></br><br></br>Thanks to Dylan, Michele, Deepali, Danielle, Jason, and Najia, the world now has acceess to a fake auctioning site that is mostly functional.

        <br></br><br></br>These 6 amazing students banded together early in the summer of 2022 and after a 30 minute brainstorming session, 
        came up with the idea to create an Auction Site for their E-commerce project (right?! an E-commerce site? In computer science?).
        Little did they know how much of a feat they were about to take on. But they were ambitious. Apparently, their professor was also ambitious.

        <br></br><br></br>So after a lot of blood, sweat, and tears, we have prevailed and alas, what you see in front of you is the product of hard work after a matter of weeks. 
        All it took was a lot of coffee of sleepless nights learning about all the extra programs that went into this project, and figuring out how to tie it all together.

        <Typography variant="h6">
        YOURS TRULY,
        <br></br><br></br>
        The 3340 Squad
        </Typography>
      </Typography>

      
      <Divider dark />
      
    </div>
  );
}

export default About;
