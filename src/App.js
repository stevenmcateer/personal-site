import React, {Component} from 'react';
import './App.css';
import {Container, Grid} from 'semantic-ui-react'
import About from "./About"
import Education from "./Education"
import Projects from "./Projects"
import MenuBar from "./MenuBar"
import Work from "./Work"
import Contact from "./Contact";

function App() {


    return (
        <React.Fragment>
            <MenuBar/>
            <br/>
            <div id={"art-block"}>
                <h1 className={"middle"} align="center" >// Steven McAteer</h1>

            </div>
            {/*<Ticker/>*/}
            <div id={"about-block"}>
                <About/>
                <br/>
            </div>
            <div id={"info-block"}>
                <br/>
                <Education/>
                <Work/>
            </div>
            <div id={"project-block"}>
                <br/>
                <Projects/>
                <br/>
                <br/>

            </div>
            <div id={"contact-block"}>
                <br/>
                <Contact/>
                <br/>
                <br/>

            </div>
        </React.Fragment>

    );
}

export default App;
