import React, { useState, useEffect, useRef } from "react";
import { useMediaQuery } from 'usehooks-ts';

// material-ui
import { makeStyles } from "@material-ui/core/styles";

// hooks
import { useNavigate, Link, useResolvedPath, useMatch } from "react-router-dom";



// building colors
//
// primary: #231f20
// secondary: #808285
// thirtiary: #bcbdc0
//


const useStyles = makeStyles(theme => ({
    container: {
        
    },
    navBar: {
        backgroundColor: '#fff',
        color: '#231f20',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'stretch',
        gap: '2rem',
        height: '3rem',
        borderTop: '1px solid #231f20',
        borderBottom: 'calc(1vw - 4px) solid #fff',
        position: 'sticky',
        top: -1
    },
    navItems: {
        padding: 0,
        margin: 0,
        listStyle: 'none',
        display: 'flex',
    },
    site: {
        fontSize: '2rem',
        color: 'inherit',
        textDecoration: 'none',
    },
    navLinks: {
        textDecoration: 'none',
        color: 'inherit',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 'calc(2vw + 75px)',
        '&:hover': {
            background: "#808285",
        },
    },
    activePage: {
        background: "#231f20",
        color: 'white'
    },
    navBarName: {
        fontFamily: 'Marck Script',
        fontSize: '2.5rem',
        textDecoration: 'none',
        color: 'red',
        position: 'absolute',
        top: '50%',
        left: '5px',
        transform: 'translate(0, -50%)',
        opacity: 0,
    },
    fadeIn: {
        opacity: 1,
        visibility: 'visible',
        transition: 'opacity 1s',
    },
    fadeOut: {
        transition: 'opacity 0.5s',
        zIndex: -5,
    }

}));


const NavBar = () => {

    const classes = useStyles();
    const navigate = useNavigate();

    const widerThan = useMediaQuery('(min-width: 780px)');
    const disableLink = useMediaQuery('(min-width: 770px)');


    const [isSticky, setIsSticky] = useState(false)
    const ref = useRef()

    // mount 
    useEffect(() => {
        const cachedRef = ref.current,
            observer = new IntersectionObserver(
                ([e]) => setIsSticky(e.intersectionRatio < 1),
                {
                    threshold: [1],
                    // rootMargin: '-1px 0px 0px 0px',  // alternativly, use this and set `top:0` in the CSS
                }
            )
        observer.observe(cachedRef)

        // unmount
        return function () {
            observer.unobserve(cachedRef)
        }
    }, [])

    return (
        <nav className={classes.navBar}>
            <Link to='/' className={`${classes.navBarName} ${(isSticky && widerThan) ? classes.fadeIn : classes.fadeOut}`} ref={ref}>Sarah Zrna</Link>
            <ul className={classes.navItems}>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
                <CustomLink to='/photos'>Photos</CustomLink>
                <CustomLink to='/epk'>EPK</CustomLink>
            </ul>
        </nav>
    );
}

function CustomLink({ to, children, ...props }) {
    const classes = useStyles();
    const resolvedPath = useResolvedPath(to);
    const isAvtive = useMatch({ path: resolvedPath.pathname })
    return (
        <li className={isAvtive ? classes.activePage : null}>
            <Link to={to} className={classes.navLinks}>{children}</Link>
        </li>
    )
}

export default NavBar;
