import React from 'react';
import {Image, Item, Segment, Container, Card, Icon, GridColumn} from 'semantic-ui-react'
import assist from "./assist.png"
import ups from "./ups.svg"
import List from "semantic-ui-react/dist/commonjs/elements/List/List";
import Divider from "semantic-ui-react/dist/commonjs/elements/Divider/Divider";
import Label from "semantic-ui-react/dist/commonjs/elements/Label/Label";
export default class Work extends React.Component {


    render(){
        return (
            <Container>
                <a name="experience"></a>
                <h2 align="center" className={"sub-heading"}>WORK EXPERIENCE</h2>
                <Divider/>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' src={assist} />
                        <Item.Content>
                            <Item.Header className="font" as='a'>ASSISTments</Item.Header>
                            <Item.Meta>Data Science</Item.Meta>
                            <Item.Meta floated="right">June 2019 - Present</Item.Meta>
                            <Item.Description>
                               <List bulleted relaxed>
                                   <List.Item>
                                       Constructed models for a randomized control trial to understand
                                       effect of automated open-response grading on student learning
                                   </List.Item>
                                   <List.Item>
                                       Leveraged Rasch model to identify correlation between student performance, teacher grading, and open-ended response accuracy
                                   </List.Item>
                                   <List.Item>
                                       Created LSTM recurrent neural network with GloVe word embeddings
                                       for context-based natural language processing
                                   </List.Item>
                                   <List.Item>
                                       Cleaned live student response data using Python to fix discrepancies during preprocessing stage
                                   </List.Item>
                                   <List.Item>
                                       Developed Data Mining Competition website to handle registration, submissions, and evaluation of predictions
                                   </List.Item>
                               </List>
                            </Item.Description>
                            <Item.Extra>
                                <Label basic color='gray'>Machine Learning</Label>
                                <Label basic color='gray'>Natural Language Processing</Label>
                                <Label basic color='gray'>Java</Label>
                                <Label basic color='gray'>Spring Framework</Label>
                                <Label basic color='gray'>Postgres</Label>
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
                                <List bulleted relaxed>
                                    <List.Item>
                                        Helped UPS distribution center managers schedule staff more effectively
                                    </List.Item>
                                    <List.Item>
                                        Developed PowerBI dashboards to predict seasonal workforce needs
                                    </List.Item>
                                    <List.Item>
                                        Calculated utilization levels for all employees to maximize scheduling efficiency and save valuable man-hours
                                    </List.Item>
                                    <List.Item>
                                        Designed star schema database with multiple live data sources
                                    </List.Item>
                                </List>
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
                                <List bulleted relaxed>
                                    <List.Item>
                                        Automated internal project planning tools to track progress for teams
                                    </List.Item>
                                    <List.Item>
                                        Developed time-saving custom chart import feature for an app used by
                                        key UPS customers to calculate shipping incentives
                                    </List.Item>
                                </List>
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