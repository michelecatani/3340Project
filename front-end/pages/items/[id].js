import * as React from 'react';
import { useRouter } from 'next/router';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// STYLES
import { display } from '@mui/system';
import { borders } from '@mui/system';
import { makeStyles } from "@material-ui/core/styles";

const styles = {
   buttons: {
    display: "block",
    align: "center",
    size: "medium"
   }
}


export default function Item({item}) {
    const router = useRouter();
    const { id } = router.query;
    const style = useStyles();

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

                <Box sx={{ maxWidth: 600, width: "100%", alignItems: "center", border: 1, borderColor: 'error.main'}}>
                    <p>Photo of Item will go here</p>
                    <Typography variant="h4" align="center">
                        <img src="/neoBay-Logo.png" alt="NeoBay" width="500px"/>
                    </Typography>
                </Box>

                <Box 
                    sx={{
                        justifyContent: "space-between",
                        display: "block"
                    }}
                >
                    <Button   
                        variant="outlined"
                        href="#contained-buttons"
                        className={style.buttons}                
                    >BID NOW
                    </Button>

                    <br/>
                    
                    <Button 
                        variant="outlined"
                        href="#contained-buttons"
                        className={style.buttons}  
                    
                    >WATCH
                    </Button>

                </Box>


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