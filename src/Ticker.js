import React from 'react';
import {Carousel} from 'react-responsive-carousel'
import {Image, Header, Segment, Container, Card, Icon} from 'semantic-ui-react'
import dj from "./dj.jpg"
import coding from "./coding.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Typist from 'react-typist';



export default class Ticker extends React.Component {


    render(){
        return (
            <Container>
                <Typist class={"floating"}>
                    Hi, my name is Steven McAteer.
                </Typist>
                <Carousel showArrows={true} showThumbs={false}>

                    <div>
                        <img src={dj} />
                    </div>
                    <div>
                        <img src={coding} />
                    </div>

                </Carousel>

            </Container>


        )
    }
}
