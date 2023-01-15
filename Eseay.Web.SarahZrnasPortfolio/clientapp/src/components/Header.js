import React, { useState } from "react";

// material-ui
import { makeStyles } from "@material-ui/core/styles";

// hooks
import { useNavigate, Link, useResolvedPath, useMatch } from "react-router-dom";

// local
import Backdrop from '../assets/images/Dallas-Texas-Skyline.png';
import '../fonts/GoogleFonts.css'


const useStyles = makeStyles(theme => ({
    container: {
        margin: 'auto',
        overflow: 'hidden',
        textAlign: 'center',
        position: 'relative'
    },
    image: {
        width: '100vw',
        maxWidth: '1200px',
        marginBottom: '-50px',
        alignSelf: 'center',
    },
    name: {
        fontFamily: 'Marck Script',
        fontSize: '8vw',
        color: 'red',
        position: 'absolute',
        top: '60%',
        left: '50%',
        transform: 'translate(-50%, -40%)',
    },
    

}));


const Header = () => {

    const classes = useStyles();
    const navigate = useNavigate();


    return (
        <>
            <div className={classes.container} id="header-container">
                <img className={classes.image} src={Backdrop} />
                <div className={classes.name}>Sarah Zrna</div>
            </div>
        </>
    );
}

export default Header;
