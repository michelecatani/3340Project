import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Link from "@material-ui/core/Link";

// Icons
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LoginIcon from "@mui/icons-material/Login";
import InfoIcon from "@mui/icons-material/Info";

export default function footer() {
  return (
    <footer>
      <Box
        px={{ xs: 2, sm: 5 }}
        py={{ xs: 3, sm: 3 }}
        bgcolor="text.primary"
        color="black"
      >
        <Container maxwidth="lg" sx={{ pb: 2.5 }}>
          <Grid container justifyContent="center" spacing={5}>
            {/* For About Section */}
            <Grid item xs={10} sm={3}>
              {/* About header */}
              <Box
                borderBottom={1}
                sx={{ borderColor: "gray", pb: 0.5, mb: 1 }}
                display="flex"
              >
                <Typography color="white" style={{ fontWeight: "bold" }}>
                  <InfoIcon fontSize="small" sx={{ pt: 0.6 }} /> About
                </Typography>
              </Box>
              <Box>
                <Link
                  style={{
                    color: "#D5D5D5",
                    fontSize: "0.9rem",
                  }}
                  href="/about"
                >
                  About Us
                </Link>
              </Box>
              <Box>
                <Link
                  style={{
                    color: "#D5D5D5",
                    fontSize: "0.9rem",
                  }}
                  href="/faq"
                >
                  FAQ
                </Link>
              </Box>
              <Box>
                <Link
                  style={{
                    color: "#D5D5D5",
                    fontSize: "0.9rem",
                  }}
                  href="/"
                >
                  Contact Us
                </Link>
              </Box>
            </Grid>
            {/* For Account Section */}
            <Grid item xs={10} sm={3}>
              {/* About header */}
              <Box
                borderBottom={1}
                sx={{ borderColor: "gray", pb: 0.5, mb: 1 }}
              >
                {" "}
                <Typography color="white" style={{ fontWeight: "bold" }}>
                  <LoginIcon fontSize="small" sx={{ pt: 0.6 }} /> Account
                </Typography>
              </Box>
              <Box>
                <Link
                  style={{
                    color: "#D5D5D5",
                    fontSize: "0.9rem",
                  }}
                  href="/auth/login"
                >
                  Login
                </Link>
              </Box>
              <Box>
                <Link
                  style={{
                    color: "#D5D5D5",
                    fontSize: "0.9rem",
                  }}
                  href="/auth/register"
                >
                  Sign Up
                </Link>
              </Box>
            </Grid>
            {/* For Extra Section */}
            <Grid item xs={10} sm={3}>
              {/* About header */}
              <Box
                borderBottom={1}
                sx={{ borderColor: "gray", pb: 0.5, mb: 1 }}
              >
                {" "}
                <Typography color="white" style={{ fontWeight: "bold" }}>
                  <AddCircleIcon fontSize="small" sx={{ pt: 0.6 }} />
                  Resources
                </Typography>
              </Box>

              <Box>
                <Link
                  style={{
                    color: "#D5D5D5",
                    fontSize: "0.9rem",
                  }}
                  href="/"
                >
                  Add links
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
        {/* divider */}
        <Divider sx={{ background: "grey" }} />
        {/* container */}
        <Container maxwidth="lg" sx={{ pt: 3 }}>
          <Grid item xs={12} sm={4}>
            <Box textAlign="center" color="white">
              {" "}
              <Typography sx={{ fontWeight: "bold" }}>
                Copyright &copy; The Squad 2022
              </Typography>
            </Box>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}
