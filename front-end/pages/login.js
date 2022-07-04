import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Button, TextField, Typography } from "@mui/material";

export default function LoginPage() {
  const handleFormSubmission = () => {
    // Handle form submission here
  };

  const [loginForm, setloginForm] = useState({
    email: "",
    password: "",
  });

  function handleLoginSubmission(event) {
    axios({
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_API_HOST}/register`,
      data: {
        email: loginForm.email,
        password: loginForm.password,
      },
    })
      .then((response) => {
        props.setToken(response.data.access_token);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });

    setloginForm({
      email: "",
      password: "",
    });

    event.preventDefault();
  }

  function handleChange(event) {
    const { value, name } = event.target;
    setloginForm((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        height: "100vh",
      }}
    >
      <Box sx={{ maxWidth: 500, width: "100%" }}>
        <Typography>NeoBay</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextField
            label="Email"
            type="email"
            name="email"
            value={loginForm.email}
            margin="dense"
            onChange={handleChange}
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            placeholder="**********"
            value={loginForm.password}
            margin="dense"
            onChange={handleChange}
          />
          <Box sx={{ mt: 2 }}>
            <Button
              variant="contained"
              onClick={handleLoginSubmission}
              fullWidth
            >
              Login
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

