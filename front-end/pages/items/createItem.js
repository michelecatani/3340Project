import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Button, TextField, Typography } from "@mui/material";

export default function CreateItem() {

  const [itemForm, setitemForm] = useState({
    name: " ",
    startingPrice: " "
  });

  function handleItemSubmission(event) {
    axios({
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_API_HOST}/items/createItem`,
      data: {
        name: itemForm.name,
        startingPrice: itemForm.startingPrice,
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });

    setitemForm({
      name: " ",
      startingPrice: " ",
    });

    event.preventDefault();
  }

  function handleChange(event) {
    const { value, name } = event.target;
    setitemForm((prevNote) => ({
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
        height: "75vh",
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
            label="Name"
            type="name"
            name="name"
            value={itemForm.name}
            margin="dense"
            onChange={handleChange}
          />
          <TextField
            label="startingPrice"
            type="startingPrice"
            name="startingPrice"
            value={itemForm.startingPrice}
            margin="dense"
            onChange={handleChange}
          />
          <Box display="flex" justifyContent="space-between" sx={{ mt: 2 }}>
            <Button
              variant="contained"
              onClick={handleItemSubmission}
              sx={{ mr: 1 }}
              fullWidth
            >
              Create Item
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}