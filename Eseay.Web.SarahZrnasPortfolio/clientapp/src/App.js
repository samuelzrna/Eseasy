import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// material-ui
import { makeStyles } from "@material-ui/core/styles";

// local components
import Home from "./pages/Home";
import About from "./pages/About";
import Photos from "./pages/Photos";
import ElectronicPressKit from "./pages/ElectronicPressKit";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";

// images
import Background from '../src/assets/images/SarahZrnaSingingBackground.jpg';


const useStyles = makeStyles(theme => ({
    appContainer: {
        position: 'relative',
    },
    pageContainer: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        minHeight: '100vh',
    }
}));


const App = () => {

    const classes = useStyles();

    return (
        <>
            <div className={classes.appContainer}>
                <Header />
                <NavBar />
                <div className={classes.pageContainer}>
                    <Routes>
                        <Route path='/photos' element={<Photos />} />
                        <Route path='/epk' element={<ElectronicPressKit />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/' element={<Home />} />
                        <Route path='/' exact='true' element={<Home />} />
                        </Routes>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default App;
