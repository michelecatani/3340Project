import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function footer() {
  return (
    <Box
      px={{ xs: 2, sm: 5 }}
      py={{ xs: 3, sm: 5 }}
      bgcolor="text.primary"
      color="black"
      position="fixed"
      bottom="0"
      width="100%"
    >
      <Container maxwidth="lg">
        <Grid item xs={12} sm={4}>
          <Box textAlign="center" color="white">
            Copyright &copy; The Squad 2022
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}
