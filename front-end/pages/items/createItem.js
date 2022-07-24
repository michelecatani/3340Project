import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Button, TextField, Typography, NativeSelect, InputLabel } from "@mui/material";

const categories = [
    "Sports", "Technology", "Music", "Whatever i don't know"
]

export default function CreateItem() {

  const [category, setCategory] = useState('Sports');

  const [itemForm, setitemForm] = useState({
    name: " ",
    startingPrice: " ",
    category: " "
  });

  function handleItemSubmission(event) {
    axios({
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_API_HOST}/items/createItem`,
      data: {
        name: itemForm.name,
        startingPrice: itemForm.startingPrice,
        category: itemForm.category
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
      category: " "
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
            label="Starting Price"
            type="number"
            name="startingPrice"
            value={itemForm.startingPrice}
            margin="dense"
            onChange={handleChange}
          />
          <InputLabel variant="standard" htmlFor="selectCategory">
            Category
          </InputLabel>
          <NativeSelect
            inputProps={{
                name: 'age',
                id: 'selectCategory',
            }}
            >
            {categories.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
            </NativeSelect>
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