import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/faces/christian.jpg";
import team3 from "assets/img/faces/Lizzy.jpg";

const useStyles = makeStyles(styles);

export default function SectionTeam() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Meet the Team!</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Gavin Mack
                <br />
                <small className={classes.smallTitle}>Computer Science & Math Teacher</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Gavin received a B.S. in Computer Science with a focus on Game Design and a minor in Education from UC Santa Cruz. He has been teaching high school math and computer science for the last three years while residing in San Francisco{"'"}s East Bay.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  target ="_blank"
                  href="http://www.linkedin.com/in/gavinmack"
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Janet Ranshous
                <br />
                <small className={classes.smallTitle}>Math Teacher</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Janet possesses a B.A. in Mathematics and an M.A. in Curriculum 
                  Development from UC San Diego, in addition to decades of teaching 
                  experience. When she{"'"}s not doing math problems, you can usually
                  find Janet working her way through a jigsaw puzzle.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Lizzy Asarnow
                <br />
                <small className={classes.smallTitle}>Piano & Voice Teacher</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Lizzy has been an educator in various forms for nearly a decade. Besides possessing a B.A. in Music and minor in Education from UC Santa Cruz, she is a part-time faculty member at the Jazz School in Berkeley, CA, and heads the Education Department at her local theater. 
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
