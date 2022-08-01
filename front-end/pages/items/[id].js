import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import convertToImage from "../../src/utils/base64";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import Grid from "@mui/material/Grid";
import { TextField } from "@mui/material";

// STYLES
import { makeStyles } from "@material-ui/core/styles";

const styles = {
  buttons: {
    align: "center",
    size: "medium",
  },
};

const useStyles = makeStyles(styles);

export default function Item({ item }) {
  const router = useRouter();
  const { id } = router.query;
  const [bid, setBid] = useState({
    bid: 0
  });

  const [admin, setAdmin]=useState(false);

  useEffect(() => {
    (localStorage.getItem("Atoken"))?setAdmin(true)
      : setAdmin(false);
  }, []);

  function submitBid(id, bid) {
    axios({
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_API_HOST}/items/newBid`,
      data: {
        newPrice: bid,
        username: "Bob",
        itemID: id
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
  }

  function deleteItem(id) {
    axios({
      method: "DELETE",
      url: `${process.env.NEXT_PUBLIC_API_HOST}/items/deleteItem`,
      data: {
        
        itemID: id
      },
    })
    .then((response) => {
      console.log(response);
      window.location.replace("items/items/"); 
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    });
  }


  const handleChange = event => {
    const { value, name } = event.target;
    setBid((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  };

  return (
    <div style={{ padding: "3%" }}>
      <Container fixed>
        <Button
          startIcon={<KeyboardReturnIcon />}
          variant="outlined"
          href="/items/items"
        >
          Return
        </Button>

        <Grid container justifyContent="space-between" sx={{ mt: 5, mb: 5 }}>
          <Grid item>
            <Box sx={{ width: 500, height: "auto" }}>
              <Typography
                variant="h4"
                sx={{ pb: 2 }}
                style={{ fontWeight: "bolder" }}
              >
                {item.name}
              </Typography>
              <Typography sx={{ pb: 2 }}>
                <b>Author:</b> {item.author}
              </Typography>
              <Typography sx={{ pb: 2 }}>
                <b>Category:</b> {item.category}
              </Typography>
              <Typography sx={{ pb: 2 }}>
                <b>Highest Bid:</b> {" $" + item.currHighestBid}
              </Typography>
              <Typography sx={{ pb: 2 }}>
                <b>Current winner: </b> {item.currWinner}
              </Typography>
              <Typography align="left" sx={{ pb: 2 }}>
                <b>Item Description:</b> {item.description}
              </Typography>
              <TextField
                label="Enter bid"
                type="number"
                name="bid"
                value={bid}
                onChange={handleChange}
              />
              <Box display="flex" justifyContent="space-between" sx={{ mt: 2 }}>
                {admin?
                  <Button
                  variant="contained"
                  sx={({ mr: 2 }, { ml: 2 }, { mb: 2 })}
                  onClick={() => {deleteItem(id)}}
                >
                  Delete Item
                </Button>
                :
                <Button
                  variant="contained"
                  sx={({ mr: 2 }, { ml: 2 }, { mb: 2 })}
                onClick= {() => {submitBid(id)}}
                >
                  BID NOW
                </Button> }
              </Box>
            </Box>
          </Grid>
          <Grid item>
            <Box
              sx={{
                width: 500,
                height: "auto",
                borderRadius: 1,
                backgroundColor: "primary.dark",
              }}
              maxwidth="lg"
              component="img"
              src={convertToImage(item.image_file)}
              alt={item.title}
              loading="lazy"
            ></Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  console.log(params);
  const req = await fetch(
    `${process.env.NEXT_PUBLIC_API_HOST}/items/seeItem?id=${params.id}`
  );
  const data = await req.json();

  return {
    props: { item: data },
  };
}
