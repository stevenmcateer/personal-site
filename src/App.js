import React, {Component} from 'react';
import './App.css';
import {Container, Grid} from 'semantic-ui-react'
import About from "./About"
import Education from "./Education"
import Projects from "./Projects"
import MenuBar from "./MenuBar"
import Work from "./Work"
import Contact from "./Contact";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Intro from "./Intro"; // You can also use <link> for styles
// ..


function App() {
    AOS.init();
    return (
        <React.Fragment>
            {/*<MenuBar/>*/}
            {/*<br/>*/}
            <div data-aos="zoom-out" id={"art-block"}>
                <Intro/>
            </div>
            <div data-aos="fade-left" id={"about-block"}>
                <About/>
                <br/>
            </div>
            <div data-aos="fade-right" id={"info-block"}>
                <br/>
                <Education/>
                <Work/>
            </div>
            <div data-aos="fade-left" id={"project-block"}>
                <br/>
                <Projects/>
                <br/>
                <br/>

            </div>
            <div data-aos="fade-right" id={"contact-block"}>
                <br/>
                <Contact/>
                <br/>
                <br/>

            </div>
        </React.Fragment>

    );
}

export default App;
