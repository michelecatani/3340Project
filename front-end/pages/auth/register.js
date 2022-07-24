import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Button, TextField, Typography } from "@mui/material";

export default function RegisterPage() {
  const [registrationForm, setRegistrationForm] = useState({
    email: "",
    password: "",
    username: "",
    first_name: "",
    last_name: "",
    address: "",
    phone: "",
    state: "",
    country: "",
    credit: "",
    expiry: "",
  });

  function handleRegistrationSubmission(event) {
    axios({
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_API_HOST}/auth/register`,
      data: {
        email: registrationForm.email,
        password: registrationForm.password,
        username: registrationForm.username,
        firstName: registrationForm.first_name,
        lastName: registrationForm.last_name,
        address: registrationForm.address,
        phone: registrationForm.phone,
        state: registrationForm.state,
        country: registrationForm.country,
        credit: registrationForm.credit,
        expiry: registrationForm.expiry,
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

    setRegistrationForm({
      email: "",
      password: "",
      username: "",
      firstName: "",
      lastName: "",
      address: "",
      phone: "",
      state: "",
      country: "",
      credit: "",
      expiry: "",
    });

    event.preventDefault();
  }

  function handleChange(event) {
    const { value, name } = event.target;
    setRegistrationForm((prevNote) => ({
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
        height: "120vh",
      }}
    >
      <Box sx={{ maxWidth: 500, width: "100%" }}>
        <Typography variant="h4" align="center">
          <img src="/neoBay-Logo.png" alt="NeoBay" width="500px"/>
        </Typography>
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
            value={registrationForm.email}
            margin="dense"
            onChange={handleChange}
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            placeholder="**********"
            value={registrationForm.password}
            margin="dense"
            onChange={handleChange}
          />
          <TextField
            label="Username"
            name="username"
            value={registrationForm.username}
            margin="dense"
            onChange={handleChange}
          />

          <TextField
            label="First Name"
            name="firstName"
            value={registrationForm.firstName}
            margin="dense"
            onChange={handleChange}
          />
          <TextField
            label="Last Name"
            name="lastName"
            value={registrationForm.lastName}
            margin="dense"
            onChange={handleChange}
          />
          <TextField
            label="Address"
            name="address"
            value={registrationForm.address}
            margin="dense"
            onChange={handleChange}
          />
          <TextField
            label="Phone"
            type="tel"
            name="phone"
            value={registrationForm.phone}
            margin="dense"
            onChange={handleChange}
          />
          <TextField
            label="State"
            name="state"
            value={registrationForm.state}
            margin="dense"
            onChange={handleChange}
          />
          <TextField
            label="Country"
            name="country"
            value={registrationForm.country}
            margin="dense"
            onChange={handleChange}
          />
          <TextField
            label="Credit"
            type="number"
            name="credit"
            value={registrationForm.credit}
            margin="dense"
            onChange={handleChange}
          />
          <TextField
            label="Expiry"
            type="date"
            name="expiry"
            value={registrationForm.expiry}
            margin="dense"
            onChange={handleChange}
          />
          <Box sx={{ mt: 2 }}>
            <Button
              variant="contained"
              onClick={handleRegistrationSubmission}
              fullWidth
            >
              Register
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
