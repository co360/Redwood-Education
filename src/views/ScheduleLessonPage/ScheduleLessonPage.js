import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";

// @material-ui/icons
import Icon from "@material-ui/core/Icon";
import Info from "@material-ui/icons/Info";
import People from "@material-ui/icons/People";
import Phone from "@material-ui/icons/Phone";
import Email from "@material-ui/icons/Email";
import Subject from '@material-ui/icons/Subject';

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
/*import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";*/

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function ScheduleLessonPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Redwood Education"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Redwood Education</h1>
              <h3>
                Offering Virtual Computer Science, Programming, Mathematics, Piano, & Voice Instruction From Qualified Teachers.
              </h3>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <p>Schedule Free 30 Minute Trial</p>
          <form className={classes.form}>
            <CustomInput
              labelText="Parent First Name"
              id="parentFirst"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                type: "text",
                required: true,
                endAdornment: (
                  <InputAdornment position="end">
                    <People className={classes.inputIconsColor} />
                  </InputAdornment>
                )
              }}
            />
            <CustomInput
              labelText="Parent Last Name"
              id="parentLast"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                type: "text",
                required: true,
                endAdornment: (
                  <InputAdornment position="end">
                    <People className={classes.inputIconsColor} />
                  </InputAdornment>
                )
              }}
            />
            <CustomInput
              labelText="Parent Email"
              id="parentEmail"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                type: "text",
                required: true,
                endAdornment: (
                  <InputAdornment position="end">
                    <Email className={classes.inputIconsColor} />
                  </InputAdornment>
                )
              }}
            />
            <CustomInput
              labelText="Parent Phone Number"
              id="parentPhone"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                type: "text",
                endAdornment: (
                  <InputAdornment position="end">
                    <Phone className={classes.inputIconsColor} />
                  </InputAdornment>
                )
              }}
            />
            <CustomInput
              labelText="Student First Name"
              id="studentFirst"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                type: "text",
                required: true,
                endAdornment: (
                  <InputAdornment position="end">
                    <People className={classes.inputIconsColor} />
                  </InputAdornment>
                )
              }}
            />
            <CustomInput
              labelText="Student Last Name"
              id="studentLast"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                type: "text",
                required: true,
                endAdornment: (
                  <InputAdornment position="end">
                    <People className={classes.inputIconsColor} />
                  </InputAdornment>
                )
              }}
            />
            <CustomInput
              labelText="Student Age"
              id="studentAge"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                type: "text",
                required: true,
                endAdornment: (
                  <InputAdornment position="end">
                    <Email className={classes.inputIconsColor} />
                  </InputAdornment>
                )
              }}
            />
            <CustomInput
              labelText="Course"
              id="course"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                type: "text",
                multiline: true,
                endAdornment: (
                  <InputAdornment position="end">
                    <Subject className={classes.inputIconsColor} />
                  </InputAdornment>
                )
              }}
            />
            <CustomInput
              labelText="Additional Information (Anything you would like to share about your student!)"
              id="info"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                type: "text",
                multiline: true,
                endAdornment: (
                  <InputAdornment position="end">
                    <Info className={classes.inputIconsColor} />
                  </InputAdornment>
                )
              }}
            />
            {/*<CustomInput
              labelText="Password"
              id="pass"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                type: "password",
                endAdornment: (
                  <InputAdornment position="end">
                    <Icon className={classes.inputIconsColor}>
                      lock_outline
                    </Icon>
                  </InputAdornment>
                ),
                autoComplete: "off"
              }}
            />*/}
            <Button
              color="rose"
              size="lg"
              href="/profile-page"
              rel="noopener noreferrer"
            >
              {/*<i className="fas fa-calendar" />*/}
              Schedule Free Trial
            </Button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
