// import Calendar Component 
import React, { Component } from 'react';
import { DatePicker } from '@y0c/react-datepicker';
// import calendar style 
// You can customize style by copying asset folder.
import '@y0c/react-datepicker/assets/styles/calendar.scss';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// Please include the locale you want to use.
// and delivery props to calendar component 
// See locale list https://github.com/moment/moment/tree/develop/locale
import 'moment/locale/en-gb';

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionDatePicker() {
  const classes = useStyles();
  const onChange = title => (...args) => console.log(title, args);

  /*onChange = (date) => {
    console.log(date);
  }*/
  
  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>Schedule a Free Trial Lesson!</h2>
        </div>
        <h4>Please Select a Date and Time</h4>
      	<DatePicker showToday includeTime onChange={onChange("DatePicker")} />
      	<div className={classes.title}>
      	  
      	</div>
      </div>
    </div>
  )
}
