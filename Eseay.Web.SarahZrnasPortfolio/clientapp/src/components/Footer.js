import React, { useState } from "react";

// material-ui
import { makeStyles } from "@material-ui/core/styles";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

// hooks
import { useNavigate, Link, useResolvedPath, useMatch } from "react-router-dom";

// local
import Backdrop from '../assets/images/Dallas-Texas-Skyline.png';
import '../fonts/GoogleFonts.css'
import '../styles/SocialStyles.css'


const useStyles = makeStyles(theme => ({
    container: {
        margin: 'auto',
        overflow: 'hidden',
        textAlign: 'center',
        position: 'relative',
        backgroundColor: '#bcbdc0'
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
    }

}));


const Footer = () => {

    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <>
            <div className={classes.container} id="footer-container">
                <p className="social-container">
                    <a
                        href="https://www.youtube.com/@sarahzrna4641"
                        className="youtube social"
                    >
                        <FontAwesomeIcon icon={faYoutube} size="2x" />
                    </a>
                    <a
                        href="https://www.facebook.com/SarahZrnaMusic"
                        className="facebook social"
                    >
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a
                        href="https://www.instagram.com/sarahzrna.music/"
                        className="instagram social"
                    >
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    {/*<a href="https://wwww.twitter.com" className="twitter social">
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>*/}
                </p>
            </div>
        </>
    );
}

export default Footer;
