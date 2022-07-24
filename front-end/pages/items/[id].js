import * as React from 'react';
import { useRouter } from 'next/router';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

// STYLES
import { display } from '@mui/system';
import { borders } from '@mui/system';
import { makeStyles } from "@material-ui/core/styles";

const styles = {
   buttons: {
    align: "center",
    size: "medium",
   }
}

const useStyles = makeStyles(styles);


export default function Item({item}) {
    const router = useRouter();
    const { id } = router.query;

    return (
        
        <Container>

            <h1>{item.name}</h1>
            <h3><i>{item.category}</i></h3>
            <h4>Uploaded by User: X</h4>

            <Box
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                    //border: 1,
                    //borderColor: 'error.main',
                    margin: "auto",
                    display: "block"

                }}
            >

                <Box 
                    sx={{ 
                        maxWidth: 600, 
                        width: "100%", 
                        justifyContent: "center",
                        alignItems: "center", 
                        margin: "auto",
                        border: 1, 
                        borderColor: '#1D1B27'
                    }}
                >
                    <p>Photo of Item will go here</p>
                    <Typography variant="h4" align="center">
                        <img src="/neoBay-Logo.png" alt="NeoBay" width="500px"/>
                    </Typography>
                </Box>

                <br/>

                <Typography
                    spacing={2}
                    direction="row"
                    textAlign="center"
                    display="block"
                    justifyContent="center"
                    sx={{
                        maxWidth: 600,
                        width: "100%",
                        margin: "auto",
                        p: 1,
                        //border: 1,
                        //borderColor: "#1D1B27"
                    }}
                >
                    
                    Current Highest Bid: ${item.currHighestBid} <br></br>
                    Number of bids: 0

                </Typography>

                <Box 
                    spacing={2}
                    direction="row"
                    textAlign="center"
                    display="flex"
                    justifyContent="center"
                    sx={{
                        maxWidth: 600,
                        width: "100%",
                        margin: "auto",
                        p: 1,
                        //border: 1,
                        //borderColor: "#1D1B27"
                    }}
                >
                    <Button   
                        variant="outlined"
                        href="#contained-buttons"
                        className={useStyles.buttons} 
                        sx={({ mr: 2 }, { ml: 2 })}           
                    >BID NOW
                    </Button>
                </Box>

                <h3>ITEM DESCRIPTION:</h3>

                <Typography
                    spacing={2}
                    direction="row"
                    textAlign="left"
                    display="block"
                    justifyContent="center"
                    sx={{
                        maxWidth: 600,
                        width: "100%",
                        margin: "auto",
                        p: 1,
                        //border: 1,
                        //borderColor: "#1D1B27"
                    }}
                >
                    
                    
                    <i>Item description goes here. 
                        <br/>Lorem ipsum lorem ipsum lorem ipsum.
                        <br/>Lorem ipsum lorem ipsum lorem ipsum.
                        <br/>Lorem ipsum lorem ipsum lorem ipsum.
                        <br/>Lorem ipsum lorem ipsum lorem ipsum.
                    </i>

                </Typography>

            </Box>
        </Container>

    )

}

export async function getServerSideProps({params}) {
    console.log(params);
    const req = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/items/seeItem?id=${params.id}`)
    const data = await req.json();

    return {
        props: { item: data}
    }
}