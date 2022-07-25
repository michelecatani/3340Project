// Links don't work for items page --> change to live links later

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// Icons
import HomeIcon from "@mui/icons-material/Home";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import InfoIcon from "@mui/icons-material/Info";

export default function footer() {
  return (
    <Box
      px={{ xs: 2, sm: 5 }}
      py={{ xs: 3, sm: 3 }}
      bgcolor="text.primary"
      color="black"
      position="relative"
      bottom="0"
      width="100%"
    >
      <Container sx={{ pb: 3 }} maxWidth="lg">
        {" "}
        <Grid container justifyContent="center">
          {" "}
          <Grid item>
            <Box sx={{ px: 2 }}>
              <Button
                style={{
                  color: "#D5D5D5",
                }}
                href="./"
                startIcon={<HomeIcon />}
                size="small"
              >
                Home Page
              </Button>
            </Box>
          </Grid>
          <Grid item>
            <Box sx={{ px: 4, borderColor: "gray" }} borderLeft={1}>
              <Button
                style={{
                  color: "#D5D5D5",
                }}
                startIcon={<InfoIcon />}
                href="./about"
                size="small"
              >
                About Us
              </Button>
            </Box>
          </Grid>
          <Grid item>
            <Box sx={{ px: 4, borderColor: "gray" }} borderLeft={1}>
              <Button
                style={{
                  color: "#D5D5D5",
                }}
                startIcon={<PermContactCalendarIcon />}
                variant="text"
                href="./"
                size="small"
              >
                Contact Us
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Divider sx={{ bgcolor: "gray" }} />
      {/* Copyright note */}
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
  );
}
