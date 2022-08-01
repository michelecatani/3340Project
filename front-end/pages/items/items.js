/* This is our items page.  Needs to be queried from API endpoint to retrieve list of items up for auction. 
Right now it's attached to an endpoint that just returns basic items, but that obvs needs to be dynamic. */

import React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import convertToImage from "../../src/utils/base64";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import Head from "next/head";

export default function Items() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_HOST}/items/items`).then((res) =>
      res.json().then((data) => {
        setData(data);
      })
    );
  }, []);

  function directToItem() {
    localStorage.getItem("token")
      ? window.location.replace("../items/createItem")
      : window.alert("Please log in to post an item");
  }

  const [categories, setCategory] = React.useState("");
  const handleChange = (event, SelectChangeEvent) => {
    const category = document.getElementById("categorySelect").value;
    Items((category = category));
  };

  /* below, right now we're just returning all the items in our database.  This needs to be
  clickable... material ui components can be used, basically just better looking and increased functionality.
  */
  return (
    <div style={{ padding: "3%" }}>
      {/* some Meta tags */}
      <Head>
        <title>Items</title>
        <meta charset="UTF-8" />
        <meta
          name="keywords"
          content="items, products, bid, information, team, react, nextjs, NeoBay, Auction, Comp3340, 3340"
        />
        <meta name="author" content="The Squad 2022" />
        <meta
          name="description"
          content="This is our user items page that lists the products up for auction"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Box>
        <Grid container justifyContent="space-between">
          <Typography color="black" variant="h4" style={{ fontWeight: "bold" }}>
            NeoBay Catalogue
          </Typography>
          <Button variant="outlined" onClick={directToItem}>
            Create an Item
          </Button>
        </Grid>
        {/* divider */}
        <Divider
          sx={{ bgcolor: "grey", mb: 5, mt: 2, borderBottomWidth: "2px" }}
        />
      </Box>

      <Grid
        container
        sx={{
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
        }}
      >
        <Grid container justifyContent="center" textAlign="center">
          <Box sx={{ minWidth: 200 }} textAlign="center">
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Category
              </InputLabel>

              <NativeSelect
                defaultValue={1}
                onChange={handleChange}
                inputProps={{
                  name: "ItemCategory",
                  id: "categorySelect",
                }}
              >
                <option value={1}>All</option>
                <option value={2}>Sports</option>
                <option value={3}>Technology</option>
                <option value={4}>Music</option>
                <option value={5}>Fitness</option>
                <option value={6}>Other</option>
              </NativeSelect>
            </FormControl>
          </Box>

          <Divider
            sx={{ bgcolor: "grey", mb: 5, mt: 2, borderBottomWidth: "2px" }}
          />
        </Grid>
        {data.map((item, i) => (
          <Grid item key={i}>
            <Box
              sx={{
                width: 300,
                height: 330,
                m: 1,
                backgroundColor: "#F7F7F7",
                "&:hover": {
                  backgroundColor: "#BABABA",
                  opacity: [0.9, 0.8, 0.9],
                },
                borderRadius: 1,
              }}
              textAlign="center"
            >
              <Box
                sx={{
                  width: 300,
                  height: 200,
                  borderRadius: 1,
                }}
                maxwidth="lg"
                component="img"
                src={convertToImage(item.image_file)}
                alt={item.title}
                loading="lazy"
              ></Box>
              <Typography key={i} variant="h6" align="center">
                {item.name}
              </Typography>
              <Typography variant="subtitle2" align="center">
                {item.author}
              </Typography>
              <Typography variant="body2" align="center">
                Current bid:{" $" + item.currHighestBid}
              </Typography>

              <Button
                sx={{ mt: 1 }}
                variant="contained"
                align="center"
                href={`/items/${item.id}`}
                size="small"
              >
                See Details
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
