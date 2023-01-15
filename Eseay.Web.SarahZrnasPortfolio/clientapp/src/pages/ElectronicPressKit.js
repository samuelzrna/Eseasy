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
        maxWidth: '960px',
        diplay: 'flex',
        direction: 'column',
        justifyContent: 'flex-start',
    }
}));



const ElectronicPressKit = () => {

    const classes = useStyles();
    const navigate = useNavigate();
    const location = useLocation();



    return (
        <>
            <div className={classes.container} id="epk-grid-container">
                <Grid container spacing={{ xs: 0, md: 3 }} >
                    <Grid item xs={12} md={6}>
                        <iframe width="100%" height='300vh' src="https://www.youtube.com/embed/O6yT-P2iOBM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <iframe width="100%" height='300vh' src="https://www.youtube.com/embed/EmTPcE_Rt8M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <iframe width="100%" height='300vh' src="https://www.youtube.com/embed/3kxXXuJliQE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <iframe width="100%" height='300vh' src="https://www.youtube.com/embed/ZHUogaQhLw4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

export default ElectronicPressKit;
