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
    margin: "auto",
   }
}


export default function Item({item}) {
    const router = useRouter();
    const { id } = router.query;
    const style = makeStyles();

    return (
        
        <Container>
            <p>This is a dynamic rendering, see the title. Need to make it fancier obvs.</p>

            <h1>{item.name} {id}</h1>
            <h3><i>Item Category Goes Here - make this dynamic</i></h3>
            <h4>Uploaded by User: X</h4>

            <Box
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                    border: 1,
                    borderColor: 'error.main',
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
                        border: 1,
                        borderColor: "#1D1B27"
                    }}
                >
                    <Button   
                        variant="outlined"
                        href="#contained-buttons"
                        className={style.buttons}              
                    >BID NOW
                    </Button>
                    
                    <Button 
                        variant="outlined"
                        href="#contained-buttons"
                        className={style.buttons}  
                    
                    >WATCH
                    </Button>

                </Box>

                <Stack
                    spacing={2}
                    direction="row"
                    textAlign="center"
                >
                    <Button   
                        variant="outlined"
                        href="#contained-buttons"   
                        align="center"            
                    >BID NOW
                    </Button>
                    
                    <Button 
                        variant="outlined"
                        href="#contained-buttons" 
                        align="center"                   
                    >WATCH
                    </Button>

                </Stack>


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