import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Code from '@material-ui/icons/Code';
import Functions from '@material-ui/icons/Functions';
import MusicNote from '@material-ui/icons/MusicNote';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function SectionClasses() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Online Private Lessons</h2>
          <h5 className={classes.description}>
            Redwood Education is a collective of experienced educators who
            offer online private and small group lessons through video chat.
            We currently offer instruction in Computer
            Science and programming, math courses covering Pre-Algebra through
            AP Calculus, as well as piano and vocal lessons. You can find a 
            complete listing of our courses below.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Computer Science"
              description="We offer an Introduction to Programming in Python course which we personalize to fit your learner's interests, as well as tutoring for AP Computer Science Principles and AP Computer Science A."
              icon={Code}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Mathematics"
              description="Our mathematics offerings include tutoring across all subjects up to and including AP Calculus BC. We also offer entire courses (untranscripted) in all subjects."
              icon={Functions}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Music"
              description="We offer individualized instruction in piano and voice for students of all ages (adults welcome!)."
              icon={MusicNote}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
