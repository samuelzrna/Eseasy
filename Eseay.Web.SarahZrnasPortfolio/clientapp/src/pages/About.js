import React, { useState } from "react";

// @mui
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// material-ui
import { makeStyles } from "@material-ui/core/styles";

// hooks
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';



const useStyles = makeStyles(theme => ({
    container: {
        width: "400px",
        height: "200px",
    }
}));



const About = () => {

    const classes = useStyles();
    const navigate = useNavigate();
    const location = useLocation();

    

    return (
        <>
            <div>About</div>
        </>
    );
}

export default About;
