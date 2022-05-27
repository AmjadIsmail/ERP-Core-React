
import React, { useState, useEffect } from 'react'

export default function Form(props) {
    //const classes = useStyles();
  //  const classes = useStyles();
    const {children, ...other} = props;
  return (
    <form /* className={classes.root}*/ noValidate autoComplete="off" {...other}>
    {children}
    </form>
  )
}
