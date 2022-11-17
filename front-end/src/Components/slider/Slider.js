import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Grid } from "@mui/material";
import useStyles from "./styles"
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "Quality Habeshan Dresses",
    desc: "We Provide lovely Dresses in the required size and we have a good price for them ",
    imgPath:
      "https://ethiopiantraditionaldress.com/wp-content/uploads/2021/07/V-neck-Cross-Embroidered-Colorful-Habesha-Kemis.jpg",
  },
  {
    label: "Design For Both Sex",
    desc: "We can design similar items according to your needs and we provide in the right time",
    imgPath:
      "https://www.thehabeshaweb.com/wp-content/uploads/2021/01/photo_2021-01-06_11-31-24-500x500.jpg",
  },
  {
    label: "Design For Family",
    desc: " You Can order Us for Your Family Need According To Your Prefrence Of Color",
    imgPath:
      "https://allaboutethio.com/images/ethiopian-traditional-wedding-clothes-men-women-13.jpg",
  },
  {
    label: "Design For Group",
    desc: "We Design Cloths For Both Sex with Any Number with the Required Time And Acess",
    imgPath:
      "https://i.pinimg.com/originals/51/bf/c7/51bfc73aedb4fb006a52b58abafe06c0.jpg",
  },
];

function Slider() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;
  const classes = useStyles()

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
    <div style={{ marginTop: "85px" }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Grid container>
                <Grid item sm={12} md={6}>
                  <Box
                    component="img"
                    style={{
                      height: "80vh",
                      width: "100%",
                      borderRadious: 90,
                    }}
                    src={step.imgPath}
                    alt={step.label}
                  />
                </Grid>
                <Grid item sm={12} md={6}>
                  <Paper
                    className={classes.info}
                    square
                    elevation={0}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-around",
                      alignItems: "center",
                      bgcolor: "background.default",
                    }}
                  >
                    <Typography
                      style={{
                        marginLeft: "30px",
                        fontFamily: `"Montez"`,
                        fontWeight: "bold",
                        flex: 2,
                        fontSize: "35px",
                        display: "flex",
                        "&:hover": {
                          fontWeight: "bold",
                        },
                      }}
                    >
                      {step.label}
                    </Typography>
                    <Typography variant="body1">
                     {step.desc}
                    </Typography>
                    <Button>show more</Button>
                  </Paper>
                </Grid>
              </Grid>
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
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </div>
  );
}

export default Slider;
