/* This is our about page. Right now, it's simply a test to an api endpoint of our Flask back-end.  It returns our names.
The JSON object with out names is accessible in ../../../back-end/flaskServer/auth.py */

import React from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function Contact_us() {
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
        Contact Us
      </Typography>

      {/* Divider to seperate content */}
      <Divider dark sx={{ borderBottomWidth: "2px", bgcolor: "grey" }} />


      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Item>
              <Typography
                variant="h5"
                noWrap
                component="div"
                sx={{
                  display: { xs: "none", sm: "block", fontWeight: "bold" },
                }}
              >
                <img src="/tpLogo.png" alt="NeoBay" width="200px" />
              </Typography>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
            <Typography style={{ fontWeight: "bold", color:"black", fontStyle: "italic"  }}>Meet Us</Typography>
            <Typography style={{ fontWeight: "bold", color:"black" }}>Phone: +1 (123)-456-7890 </Typography>
            <Typography style={{ fontWeight: "bold", color:"black" }}>Email: example123@email.com</Typography>
            <Typography style={{ fontWeight: "bold", color:"black" }}>Address: 123 Sesame Street </Typography>

            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Contact_us;
