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
        <h2>Expand Your Technology!</h2>
        <Button class="homeitem" variant="outlined" href="#contained-buttons">TECH 1</Button>
        <Button class="homeitem" variant="outlined" href="#contained-buttons">TECH 2</Button>
        <Button class="homeitem" variant="outlined" href="#contained-buttons">TECH 3</Button>

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

            <Typography>{images[activeStep].label}</Typography>

          </Paper>
            
          <AutoPlaySwipeableViews
            
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents>

            {images.map((step, index) => (
              
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

            <Typography>{images[activeStep].label}</Typography>

          </Paper>
            
          <AutoPlaySwipeableViews
            
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents>

            {images.map((step, index) => (
              
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

            <Typography>{images[activeStep].label}</Typography>

          </Paper>
            
          <AutoPlaySwipeableViews
            
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents>

            {images.map((step, index) => (
              
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

            <Typography>{images[activeStep].label}</Typography>

          </Paper>
            
          <AutoPlaySwipeableViews
            
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents>

            {images.map((step, index) => (
              
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

