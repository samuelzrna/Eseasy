import React, { Component } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { makeStyles } from "@material-ui/core/styles";
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(theme => ({


}));

const Photos = () => {

    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <>
            <div>Photos</div>
        </>
    );
}

export default Photos;
