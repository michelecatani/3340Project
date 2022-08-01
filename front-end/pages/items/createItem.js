import { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Button,
  TextField,
  Typography,
  NativeSelect,
  InputLabel,
} from "@mui/material";
import imageToString from "../../src/utils/imageToString";
import Head from "next/head";

const categories = ["None", "Sports", "Technology", "Music", "Fitness"];

export default function CreateItem() {
  const [itemForm, setitemForm] = useState({
    name: " ",
    startingPrice: " ",
    category: " ",
    description: " ",
  });

  function handleItemSubmission(event) {
    axios({
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_API_HOST}/items/createItem`,
      data: {
        name: itemForm.name,
        startingPrice: Number(itemForm.startingPrice),
        category: itemForm.category,
        description: itemForm.description,
        image_file: document.getElementById("image_file").fileName,
        author: localStorage.getItem("User"),
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
      category: " ",
      description: " ",
    });

    event.preventDefault();
  }

  function handleChange(event) {
    const { value, name } = event.target;
    itemForm.category = document.getElementById("selectCategory").value;
    if (document.getElementById("image_file").value != "") {
      imageToString(document.getElementById("image_file"));
    }
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
      {/* some Meta tags */}
      <Head>
        <title>Create Item</title>
        <meta charset="UTF-8" />
        <meta
          name="keywords"
          content="items, create, post, products, bid, information, team, react, nextjs, NeoBay, Auction, Comp3340, 3340"
        />
        <meta name="author" content="The Squad 2022" />
        <meta
          name="description"
          content="This is our create items page that allows users to put products up for auction"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Box sx={{ maxWidth: 500, width: "100%" }}>
        <Typography variant="h4" align="center">
          <img src="/neoBay-Logo.png" alt="NeoBay" width="500px" />
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextField
            label="Name"
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
            onChange={handleChange}
            inputProps={{
              name: "age",
              id: "selectCategory",
            }}
          >
            {categories.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </NativeSelect>
          <TextField
            label="Description"
            name="description"
            multiline
            rows={4}
            margin="dense"
            value={itemForm.description}
            onChange={handleChange}
          />
          <Button variant="contained" component="label">
            Upload Image
            <input
              type="file"
              accept="image/*"
              name="imageFile"
              value=""
              id="image_file"
              onChange={handleChange}
              hidden
            />
          </Button>
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
