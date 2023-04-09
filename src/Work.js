import React from 'react';
import {Image, Item, Segment, Container, Card, Icon, GridColumn} from 'semantic-ui-react'
import assist from "./assist.png"
import ups from "./ups.svg"
import List from "semantic-ui-react/dist/commonjs/elements/List/List";
import Divider from "semantic-ui-react/dist/commonjs/elements/Divider/Divider";
import Label from "semantic-ui-react/dist/commonjs/elements/Label/Label";
import colgate from "./colgate.jpg"
export default class Work extends React.Component {


    render(){
        return (
            <Container>
                <a name="experience"></a>
                <h2 align="center" className={"sub-heading"}>WORK EXPERIENCE</h2>
                
                <Divider/>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' src={colgate} />
                        <Item.Content>
                            <Item.Header className="font" as='a'>Colgate-Palmolive</Item.Header>
                            <Item.Meta>Data Scientist - Global Analytics Team</Item.Meta>
                            <Item.Meta floated="right">March 2022 - Present</Item.Meta>
                            <Item.Description>
                                Develop cutting-edge apps that enable global business teams to make data-driven 
                                decisions for Revenue Growth Management initiatives. Utilizing innovative technologies such as generative AI, 
                                I collaborate directly with business teams to drive projects such as assortment optimization.
                            </Item.Description>
                            <Item.Extra>
                                <Label basic color='gray'>Machine Learning</Label>
                                <Label basic color='gray'>Deep Learning</Label>
                                <Label basic color='gray'>Optimization</Label>
                                <Label basic color='gray'>ChatGPT</Label>
                                <Label basic color='gray'>RGM</Label>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                    <Divider/>
                    <Item>
                        <Item.Image size='tiny' src={colgate} />
                        <Item.Content>
                            <Item.Header className="font" as='a'>Colgate-Palmolive</Item.Header>
                            <Item.Meta>Data Scientist - Data Visualization & Insights Team</Item.Meta>
                            <Item.Meta floated="right">June 2020 - March 2022</Item.Meta>
                            <Item.Description>
                            Evaluated and implemented data science and ML Ops tools such as Dataiku, Domo, Vertex,
                            and Plotly Dash to enhance organizational capabilities. I collaborated with business teams to 
                            deliver models and explore data to drive informed decision-making.
                            </Item.Description>
                            <Item.Extra>
                                <Label basic color='gray'>Data Visualization</Label>
                                <Label basic color='gray'>AI</Label>
                                <Label basic color='gray'>Python</Label>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                    <Divider/>
                    <Item>
                        <Item.Image size='tiny' src={assist} />
                        <Item.Content>
                            <Item.Header className="font" as='a'>ASSISTments</Item.Header>
                            <Item.Meta>Data Scientist</Item.Meta>
                            <Item.Meta floated="right">June 2019 - May 2020</Item.Meta>
                            <Item.Description>
                                Responsible for building predictive models to auto-grade open-ended responses. By leveraging
                                several different deep learning and machine learning models, we can understand the correctness
                                of a student's answer to thousands of math questions. This feature has been pushed to production and is now in use.
                            </Item.Description>
                            <Item.Extra>
                                <Label basic color='gray'>Machine Learning</Label>
                                <Label basic color='gray'>Natural Language Processing</Label>
                                <Label basic color='gray'>Python</Label>
                                <Label basic color='gray'>PyTorch</Label>
                                <Label basic color='gray'>scikit-learn</Label>
                                <Label basic color='gray'>Pandas</Label>
                                <Label basic color='gray'>GloVe</Label>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                    <Divider/>

                    <Item>
                        <Item.Image size='tiny' src={ups} />

                        <Item.Content>
                            <Item.Header className="font" as='a'>United Parcel Service</Item.Header>
                            <Item.Meta>Data Analytics Intern</Item.Meta>
                            <Item.Meta floated="right">June - August 2018</Item.Meta>
                            <Item.Description>
                                Created PowerBI dashboards for UPS distribution managers to show workforce utilization levels. This enabled managers to schedule staff
                                more effectively and save valuable man-hours. In charge of organizing the data feeds and creating a star-schema database to power these dashboards.
                            </Item.Description>
                            <Item.Extra>
                                <Label basic color='gray'>PowerBI</Label>
                                <Label basic color='gray'>SQL</Label>
                                <Label basic color='gray'>Python</Label>
                                <Label basic color='gray'>Databases</Label>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                    <Divider/>
                    <Item>
                        <Item.Image size='tiny' src={ups} />
                        <Item.Content>
                            <Item.Header className="font" as='a'>United Parcel Service</Item.Header>
                            <Item.Meta>Application Development Intern</Item.Meta>
                            <Item.Meta floated="right">June - August 2017</Item.Meta>
                            <Item.Description>
                                In charge of implementing a time-saving import feature for an app used by key UPS customers. This feature was pushed
                                to production and is now used to calculate shipping incentives for large vendors.
                            </Item.Description>
                            <Item.Extra>
                                <Label basic color='gray'>C</Label>
                                <Label basic color='gray'>SQL</Label>
                                <Label basic color='gray'>Visual Basic</Label>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                </Item.Group>

            </Container>
        )
    }
}