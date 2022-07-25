/* This is our about page. Right now, it's simply a test to an api endpoint of our Flask back-end.  It returns our names.
The JSON object with out names is accessible in ../../../back-end/flaskServer/auth.py */

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
      <Typography color="black" variant="h5" sx={{ pb: 4, fontWeight: "bold" }}>
        About Us
      </Typography>
      <Typography sx={{ pb: 3 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
        sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
        blandit leo lobortis eget.Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
        lobortis eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
        lacus ex, sit amet blandit leo lobortis eget.
      </Typography>
      {/* Divider to seperate content */}
      <Divider dark />
      {/* Header for FAQ */}
      <Typography color="black" variant="h5" sx={{ py: 4, fontWeight: "bold" }}>
        Frequently Asked Question
      </Typography>
      <Typography sx={{ pb: 3 }}>
        Some common questions about the functionality of our website.
      </Typography>
      {/* First Accordion */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            backgroundColor: "#1D1B27",
          }}
        >
          <Typography color="white">Q1: What is an auction site?</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "#F3F3F3",
          }}
        >
          <Typography>
            {" "}
            Customer are able to post and purchase items. This will be an
            auction style website where users can participate in a bidding
            process to buy and sell items.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* Second Accordion */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            backgroundColor: "#1D1B27",
          }}
        >
          <Typography color="white">
            Q2: How do you purchase a product?
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "#F3F3F3",
          }}
        >
          <Typography>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* Third Accordion */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            backgroundColor: "#1D1B27",
          }}
        >
          <Typography color="white">Q3: How do you add items?</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "#F3F3F3",
          }}
        >
          <Typography>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* Fourth Accordion */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            backgroundColor: "#1D1B27",
          }}
        >
          <Typography color="white">
            Q4: How do you access Admin side?
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "#F3F3F3",
          }}
        >
          <Typography>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* Fifth Accordion */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            backgroundColor: "#1D1B27",
          }}
        >
          <Typography color="white">Q5: How does login work?</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "#F3F3F3",
          }}
        >
          <Typography>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default About;
