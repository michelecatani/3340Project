import Typography from "@mui/material/Typography";

import Divider from "@mui/material/Divider";
import Head from "next/head";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";

// open database
import GuideData from "../data/cars.json";

function Guide() {
  return (
    // added some padding around whole page
    <div style={{ padding: "3%", height: "100%" }}>
      {/* Meta Tags */}
      <Head>
        <title>Guide</title>
        <meta charset="UTF-8" />
        <meta
          name="keywords"
          content="guide,cars, prices, react, nextjs, NeoBay, Auction, Comp3340, 3340"
        />
        <meta name="author" content="The Squad 2022" />
        <meta
          name="description"
          content="This page gives users a guide on final selling prices of auctioned
          used cars"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div>
        {/* title as Typography type */}
        <Typography
          color="black"
          variant="h4"
          sx={{ pb: 1.5 }}
          style={{ fontWeight: "bold" }}
        >
          Price Guidesheet
        </Typography>
        {/* Divider to seperate content */}
        <Divider dark sx={{ borderBottomWidth: "2px", bgcolor: "grey" }} />
        {/* summary */}
        <Typography sx={{ pb: 3, pt: 1.5 }}>
          This page gives users a guide on final selling prices of auctioned
          used cars from a {/* link to open database */}
          <Link href="https://www.kaggle.com/datasets/tunguz/used-car-auction-prices?resource=download">
            database
          </Link>
          .
        </Typography>
        <TableContainer component={Paper}>
          {/* enclise in table component */}
          <Table aria-label="simple table">
            <TableHead style={{ backgroundColor: "gray" }}>
              {/* all table rows in head */}
              <TableRow border sx={{ borderWidth: 1 }}>
                <TableCell align="center">Year</TableCell>
                <TableCell align="center">Make</TableCell>
                <TableCell align="center">Model</TableCell>
                <TableCell align="center">Body</TableCell>
                <TableCell align="center">Transmission</TableCell>
                <TableCell align="center">Condition</TableCell>
                <TableCell align="center">Odometer</TableCell>
                <TableCell align="center">Color</TableCell>
                <TableCell align="center">Sellingprice</TableCell>
              </TableRow>
            </TableHead>
            {/* table body */}
            <TableBody>
              {GuideData.map((item) => (
                // generate table rows in body
                <TableRow
                  key={item.year}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{item.year}</TableCell>
                  <TableCell align="center">{item.make}</TableCell>
                  <TableCell align="center">{item.model}</TableCell>
                  <TableCell align="center">{item.body}</TableCell>
                  <TableCell align="center">
                    {item.transmission.charAt(0).toUpperCase() +
                      item.transmission.slice(1).toLowerCase()}
                  </TableCell>
                  <TableCell align="center">{item.condition}</TableCell>
                  <TableCell align="center">{item.odometer}</TableCell>
                  <TableCell align="center">
                    {item.color.charAt(0).toUpperCase() +
                      item.color.slice(1).toLowerCase()}
                  </TableCell>
                  <TableCell align="center">
                    {/* format money */}
                    {"$ " +
                      item.sellingprice
                        .toFixed(2)
                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Guide;
