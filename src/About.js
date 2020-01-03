import React from 'react';
import {Image, Header, Segment, Container, Grid, Icon} from 'semantic-ui-react'
import Divider from "semantic-ui-react/dist/commonjs/elements/Divider/Divider";


export default class About extends React.Component {


    render() {
        const square = {width: 200, height: 200}
        return (
            <Container>
                <a name="about"></a>
                <h1 align="center" className={"white sub-heading"}>ABOUT ME</h1>
                <Divider/>
                <br/>
                <Container>
                    <h3 id={"tagline"}>
                        I like anything that involves big data, machine learning, or predictive modeling.
                        <br/>
                        <br/>
                        When I'm not working, you can find me in the gym, DJing, listening to new music, or working on my car.
                    </h3>
                </Container>
            </Container>
        )
    }
}