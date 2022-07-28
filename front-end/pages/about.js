/* This is our about page. Right now, it's simply a test to an api endpoint of our Flask back-end.  It returns our names.
The JSON object with out names is accessible in ../../../back-end/flaskServer/auth.py */

import React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

function About() {
  return (
    // added some padding around whole page
    <div style={{ padding: "3%", height: "70vh" }}>
      {/* Header for About Us */}
      <Typography
        color="black"
        variant="h4"
        sx={{ pb: 1.5 }}
        style={{ fontWeight: "bold" }}
      >
        About Us
      </Typography>

      {/* Divider to seperate content */}
      <Divider dark sx={{ borderBottomWidth: "2px", bgcolor: "grey" }} />

<<<<<<< HEAD
      <Typography sx={{ pb: 3 }}>
        Neobay is an auction website created by students at the University of Windsor for our COMP3340 web development class.

        <br></br><br></br>Thanks to Dylan, Michele, Deepali, Danielle, Jason, and Najia, the world now has acceess to a fake auctioning site that is mostly functional.

        <br></br><br></br>This is a fun (and safe) space where you can look at free pictures of items that we got from the Internet, or took random pictures of items in our house. 
        (No, I really did wish we were rich enough to auction off a car, but the reality is, we are just merely students deperately trying to finish this project.) 

        <br></br><br></br>These 6 amazing students banded together early in the summer of 2022 and after a 30 minute brainstorming session, 
        came up with the idea to create an Auction Site for their E-commerce project (right?! an E-commerce site? In computer science?).
        Little did they know how much of a feat they were about to take on. But they were ambitious. Apparently, their professor was also ambitious. Since this is the case,
        here is a spoofy production of an auction site, somewhat inspired by our 90's babies memories of early "Neopetz" days and "Ebay".

        <br></br><br></br>So after a lot of blood, sweat, and tears, we have prevailed and alas, what you see in front of you is the product of hard work after a matter of weeks. 
        All it took was a lot of coffee to combat the sleepless nights full of learning about all the extra programs that went into this project, and figuring out how to tie it all together.

        <br></br><br></br>

        <Typography variant="h6">
        YOURS TRULY,
        <br></br><br></br>
        The 3340 Squad
        </Typography>
=======
      <Typography sx={{ pb: 4, pt: 3 }}>
        NeoBay is an auction website created by students at the University of
        Windsor for our COMP3340 web development class.
        <br></br>
        <br></br>Thanks to Dylan, Michele, Deepali, Danielle, Jason, and Najia,
        the world now has access to a fake auctioning site that is mostly
        functional.
        <br></br>
        <br></br>These 6 amazing students banded together early in the summer of
        2022 and after a 30 minute brainstorming session, came up with the idea
        to create an Auction Site for their E-commerce project (right?! an
        E-commerce site? In computer science?). Little did they know how much of
        a feat they were about to take on. But they were ambitious. Apparently,
        their professor was also ambitious.
        <br></br>
        <br></br>So after a lot of blood, sweat, and tears, we have prevailed,
        and alas, what you see in front of you is the product of hard work after
        a matter of weeks. All it took was a lot of coffee of sleepless nights
        learning about all the extra programs that went into this project, and
        figuring out how to tie it all together.
>>>>>>> 91cc6bba3b448c55bf24dc548da770450a02a9d5
      </Typography>
      <Box sx={{ pl: 2 }}>
        <Typography style={{ fontWeight: "bold" }}>YOURS TRULY,</Typography>
        <Typography
          style={{ fontWeight: "bold", fontStyle: "italic" }}
          sx={{ pl: 2 }}
        >
          The 3340 Squad :)
        </Typography>
      </Box>
    </div>
  );
}

export default About;
