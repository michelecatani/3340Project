import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

// STYLES
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from '@mui/material/styles';

// NEED TO ADD
// - Change Links


/*const styles = {
   name: {
      property:
   }
}

const useStyles = makeStyles(styles);*/


// CODE FOR IMAGE CAROUSEL

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

const tech_images =[
  {
    label: '1. Apple iPhone 11 Pro',
    imgPath:
      'https://images.unsplash.com/photo-1581637708784-94c4e6f46b54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
  },
  {
    label: '2. Dell XPS 13 Laptop',
    imgPath:
      'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
  },
  {
    label: '3. Keychron K2 Red Switch Keyboard',
    imgPath:
      'https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
  },
  {
    label: '4. Sony ILCE-6000 Headphones',
    imgPath:
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1465&q=80',
  },
];

const music_images =[
  {
    label: '1. ASDA Drum kit',
    imgPath:
      'https://images.unsplash.com/photo-1631025721223-4e3106970d79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
  },
  {
    label: '2. Gibson Les Paul',
    imgPath:
      'https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    label: '3. AKAI MPK mini midi keyboard',
    imgPath:
      'https://images.unsplash.com/photo-1522870389523-7e83c0065eaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    label: '4. Carlton CTR101 Bb Trumpet',
    imgPath:
      'https://images.unsplash.com/photo-1573871666457-7c7329118cf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
];

const mem_images =[
  {
    label: '1. 1997 Japanese Star Wars Film Premiere Poster Lot',
    imgPath:
      'https://images.unsplash.com/photo-1569793667639-dae11573b34f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  {
    label: '2. Vintage Yashica FX-D Quartz Film Camera',
    imgPath:
      'https://images.unsplash.com/photo-1623669347027-1c86123931c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80'
  },  {
    label: '3. Moto Moto from Madagascar (REAL Hippo)',
    imgPath:
      'https://images.unsplash.com/photo-1607335801051-9ae198dd4bb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },  {
    label: '4. Pokemon Card Lot',
    imgPath:
      'https://images.unsplash.com/photo-1621568670868-24a7dfc590e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
  },
];

const fash_images =[
  {
    label: '1. Tom Cruise Worn Sunglasses',
    imgPath:
      'https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
  {
    label: '2. Stussy Distressed Dad Hat',
    imgPath:
      'https://images.unsplash.com/photo-1521369909029-2afed882baee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },  {
    label: '3. Hugo Boss Suit and Dress shirt combo',
    imgPath:
      'https://images.unsplash.com/photo-1497339100210-9e87df79c218?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },  {
    label: '4. Air Jordan 12 Gym Red (2018) *left shoe not included*',
    imgPath:
      'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  },
];

export default function home() {

  const theme = useTheme();
  const style = makeStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;
  
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    
    <Container>

      <Container align="center">
        <h2>Welcome to</h2>
        <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block", fontWeight: "bold" } }}
          >
            <img src="/tpLogo.png" alt="NeoBay" width="200px"/>
          </Typography>
          <h2>Auctions!</h2>
          <h4><i>Where treasures are found</i></h4>
          <hr></hr>
          <p>Check out our featured auctions below:</p>
          <hr></hr>
          <h2>Expand your Technology!</h2>
        <Button class="homeitem" variant="outlined" href="#contained-buttons">TECHNOLOGY 1</Button>
        <Button class="homeitem" variant="outlined" href="#contained-buttons">TECHNOLOGY 2</Button>
        <Button class="homeitem" variant="outlined" href="#contained-buttons">TECHNOLOGY 3</Button>

        <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
          
          <Paper
            className={style.paper}
            square
            elevation={0}
            sx={{
              display: 'flex',
              alignItems: 'center',
              height: 50,
              pl: 2,
              bgcolor: 'background.default',
            }}>

            <Typography>{tech_images[activeStep].label}</Typography>

          </Paper>
            
          <AutoPlaySwipeableViews
            
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents>

            {tech_images.map((step, index) => (
              
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      height: 255,
                      display: 'block',
                      maxWidth: 400,
                      overflow: 'hidden',
                      width: '100%',
                    }}
                    src={step.imgPath}
                    alt={step.label}/>
                ) : null}
              </div>

            ))}

          </AutoPlaySwipeableViews>

          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}>
                Next
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            
            backButton={
              <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }

          />

        </Box>

      </Container>

      <hr></hr>
      <Container align="center">
        <h2>Explore New Musical Tunes!</h2>
        <Button class="homeitem" variant="outlined" href="#contained-buttons">INSTRUMENT 1</Button>
        <Button class="homeitem" variant="outlined" href="#contained-buttons">INSTRUMENT 2</Button>
        <Button class="homeitem" variant="outlined" href="#contained-buttons">INSTRUMENT 3</Button>

        <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
          
          <Paper
            square
            elevation={0}
            sx={{
              display: 'flex',
              alignItems: 'center',
              height: 50,
              pl: 2,
              bgcolor: 'background.default',
            }}>

            <Typography>{music_images[activeStep].label}</Typography>

          </Paper>
            
          <AutoPlaySwipeableViews
            
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents>

            {music_images.map((step, index) => (
              
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      height: 255,
                      display: 'block',
                      maxWidth: 400,
                      overflow: 'hidden',
                      width: '100%',
                    }}
                    src={step.imgPath}
                    alt={step.label}/>
                ) : null}
              </div>

            ))}

          </AutoPlaySwipeableViews>

          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}>
                Next
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            
            backButton={
              <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }

          />

        </Box>

      </Container>
      <hr></hr>
      <Container align="center">
        <h2>Choose a Memorable Collectible!</h2>
        <Button class="homeitem" variant="outlined" href="#contained-buttons">MEMORABILIA 1</Button>
        <Button class="homeitem" variant="outlined" href="#contained-buttons">MEMORABILIA 2</Button>
        <Button class="homeitem" variant="outlined" href="#contained-buttons">MEMORABILIA 3</Button>

        <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
          
          <Paper
            square
            elevation={0}
            sx={{
              display: 'flex',
              alignItems: 'center',
              height: 50,
              pl: 2,
              bgcolor: 'background.default',
            }}>

            <Typography>{mem_images[activeStep].label}</Typography>

          </Paper>
            
          <AutoPlaySwipeableViews
            
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents>

            {mem_images.map((step, index) => (
              
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      height: 255,
                      display: 'block',
                      maxWidth: 400,
                      overflow: 'hidden',
                      width: '100%',
                    }}
                    src={step.imgPath}
                    alt={step.label}/>
                ) : null}
              </div>

            ))}

          </AutoPlaySwipeableViews>

          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}>
                Next
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            
            backButton={
              <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }

          />

        </Box>

      </Container>
      <hr></hr>
      <Container align="center">
        <h2>Find Your Style!</h2>
        <Button class="homeitem" variant="outlined" href="#contained-buttons">FASHION 1</Button>
        <Button class="homeitem" variant="outlined" href="#contained-buttons">FASHION 2</Button>
        <Button class="homeitem" variant="outlined" href="#contained-buttons">FASHION 3</Button>

        <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
          
          <Paper
            square
            elevation={0}
            sx={{
              display: 'flex',
              alignItems: 'center',
              height: 50,
              pl: 2,
              bgcolor: 'background.default',
            }}>

            <Typography>{fash_images[activeStep].label}</Typography>

          </Paper>
            
          <AutoPlaySwipeableViews
            
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents>

            {fash_images.map((step, index) => (
              
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      height: 255,
                      display: 'block',
                      maxWidth: 400,
                      overflow: 'hidden',
                      width: '100%',
                    }}
                    src={step.imgPath}
                    alt={step.label}/>
                ) : null}
              </div>

            ))}

          </AutoPlaySwipeableViews>

          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}>
                Next
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            
            backButton={
              <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }

          />

        </Box>        

      </Container>



      <br/>
      <br/>
      <br/>

    </Container>
      
  );
  
}
