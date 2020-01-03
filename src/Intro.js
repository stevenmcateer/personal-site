import React from 'react';
import {Image, Header, Segment, Container, Grid, Icon} from 'semantic-ui-react'
import Divider from "semantic-ui-react/dist/commonjs/elements/Divider/Divider";
import portrait from "./portrait.png";
import {Item} from "semantic-ui-react/dist/commonjs/views/Item/Item";
import Scroll, {Link} from 'react-scroll'
import { Bubble } from 'react-chartjs-2';

    function getDataPoints(numPoints) {

        let datasets = [];

        for (let i = 0; i < numPoints; i++) {
            let points = [];
            let x = Math.floor(Math.random() * (500 - 1) + 1);
            let y = Math.floor(Math.random() * (500 - 1) + 1);
            let r = Math.floor(Math.random() * (10 - 1) + 1);
            points.push({x: x,
                y: y,
                r:r});

            datasets.push({
                label: 'Steven McAteer',
                data: points,
                backgroundColor:"#ff6384",
                hoverBackgroundColor: "#ff6384"
            });
        }

        console.log(datasets)
        return {datasets}
    }


export default class Intro extends React.Component {

    render() {

        const ScrollLink = Scroll.ScrollLink;
        let data = getDataPoints(500);

        return (
            <Container className={"parent"}>
                {/*<Bubble data={data} options={{*/}
                    {/*legend: {*/}
                    {/*display: false*/}
                {/*},*/}
                    {/*tooltips: {*/}
                    {/*enabled: false*/}
                {/*},*/}
                    {/*maintainAspectRatio: false,*/}
                    {/*scales: {*/}
                        {/*xAxes: [{*/}
                            {/*gridLines: {*/}
                                {/*color: "rgba(0, 0, 0, 0)",*/}
                            {/*}*/}
                        {/*}],*/}
                        {/*yAxes: [{*/}
                            {/*gridLines: {*/}
                                {/*color: "rgba(0, 0, 0, 0)",*/}
                            {/*}*/}
                        {/*}]*/}
                    {/*}}}/>*/}
                <Grid className={"parent"} stacked>
                    <Grid.Column className={"center"} align={"center"} mobile={16} tablet={16} computer={10}>
                        <Divider/>
                        <h1 className={"extra"}>Steven McAteer</h1>
                        <h1 className={"intro"}>A data scientist with a strong computer science background.</h1>
                        <h1 className={"extra"}>Feel free to
                        <Link id="contact" activeClass="active" to="contactDiv" className="extra" spy={true} smooth={true} duration={1800}> contact me!
                        </Link>
                        </h1>
                        <Divider/>
                    </Grid.Column>
                    <Grid.Column className={"center"} align={"center"} mobile={16} tablet={16} computer={6}>
                        <Image circular size='large' src={portrait}/>
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}