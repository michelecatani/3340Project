import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Button, TextField, Typography } from "@mui/material";

export default function AdminPage() {
  const [adminForm, setAdminForm] = useState({
    email: "",
    password: "",
  });

  function handleAdminSubmission(event) {
    axios({
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_API_HOST}/auth/admin`,
      data: {
        email: adminForm.email,
        password: adminForm.password,
      },
    })
      .then((response) => {
        if(localStorage.getItem("token")){
          localStorage.removeItem("token")
          localStorage.removeItem("User")
        }
        localStorage.setItem("Atoken", response.data.access_token);
        localStorage.setItem("Admin",adminForm.email)
        window.location.replace("/");

      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });

    setAdminForm({
      email: "",
      password: "",
    });

    event.preventDefault();
  }

  function handleChange(event) {
    const { value, name } = event.target;
    setAdminForm((prevNote) => ({
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
        height: "50vh",
      }}
    >
      <Box sx={{ maxWidth: 500, width: "100%" }}>
        <Typography variant="h4" align="center">
          NeoBay Admin
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
            value={adminForm.email}
            margin="dense"
            onChange={handleChange}
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            placeholder="**********"
            value={adminForm.password}
            margin="dense"
            onChange={handleChange}
          />
          <Box display="flex" justifyContent="space-between" sx={{ mt: 2 }}>
            <Button
              variant="contained"
              onClick={handleAdminSubmission}
              sx={{ mr: 1 }}
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


import * as React from 'react';


import MenuItem from '@mui/material/MenuItem';

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

