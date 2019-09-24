import React from 'react';
import {Image, Header, Segment, Container, Grid, Icon} from 'semantic-ui-react'


export default class About extends React.Component {


    render() {
        const square = {width: 200, height: 200}
        return (
            <Container>
                <a name="about"></a>
                {/*<a name="about"></a>*/}
                {/*<br/>*/}
                {/*<h1 align="center" className={"white sub-heading"}>ABOUT ME</h1>*/}
                {/*<Divider/>*/}
                {/*<br/>*/}
                <Container>
                    <h3 id={"tagline"}>
                        Hey! I'm Steven McAteer, a data scientist with a strong computer science background.
                        I like anything that involves big data, machine learning, or grabbing a beer.
                        {/*Feel free to <a name="contact">contact me!</a>*/}
                    </h3>
                </Container>
            </Container>
        )
    }
}