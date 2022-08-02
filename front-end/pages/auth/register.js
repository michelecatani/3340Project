import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Button, TextField, Typography } from "@mui/material";
import Head from "next/head";

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
        //props.setToken(response.data.access_token);
        window.location.replace("/auth/login");
      })
      .catch((error) => {
        if (error.response) {
          window.alert("Please ensure all fields are filled");
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
    <div style={{ padding: "10% 3%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <Head>
          <title>Register</title>
          <meta charset="UTF-8" />
          <meta
            name="keywords"
            content="user, register, sign up, information, team, react, nextjs, NeoBay, Auction, Comp3340, 3340"
          />
          <meta name="author" content="The Squad 2022" />
          <meta name="description" content="This is our user signup page" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <Box sx={{ maxWidth: 500, width: "100%" }}>
          <Typography variant="h4" align="center">
            <img src="/neoBay-Logo.png" alt="NeoBay" width="300px" />
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <TextField
              required
              label="Email"
              type="email"
              name="email"
              value={registrationForm.email}
              margin="dense"
              onChange={handleChange}
            />
            <TextField
              required
              label="Password"
              type="password"
              name="password"
              placeholder="**********"
              value={registrationForm.password}
              margin="dense"
              onChange={handleChange}
            />
            <TextField
              required
              label="Username"
              name="username"
              value={registrationForm.username}
              margin="dense"
              onChange={handleChange}
            />

            <TextField
              required
              label="First Name"
              name="firstName"
              value={registrationForm.firstName}
              margin="dense"
              onChange={handleChange}
            />
            <TextField
              required
              label="Last Name"
              name="lastName"
              value={registrationForm.lastName}
              margin="dense"
              onChange={handleChange}
            />
            <TextField
              required
              label="Address"
              name="address"
              value={registrationForm.address}
              margin="dense"
              onChange={handleChange}
            />
            <TextField
              required
              label="Phone"
              type="tel"
              name="phone"
              value={registrationForm.phone}
              margin="dense"
              onChange={handleChange}
            />
            <TextField
              required
              label="State"
              name="state"
              value={registrationForm.state}
              margin="dense"
              onChange={handleChange}
            />
            <TextField
              required
              label="Country"
              name="country"
              value={registrationForm.country}
              margin="dense"
              onChange={handleChange}
            />
            <TextField
              required
              label="Credit"
              type="number"
              name="credit"
              value={registrationForm.credit}
              margin="dense"
              onChange={handleChange}
            />
            <TextField
              required
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
    </div>
  );
}
