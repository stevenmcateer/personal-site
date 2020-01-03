import React from 'react';
import {Image, Item, Segment, Container, Card, Icon} from 'semantic-ui-react'
import wpi from "./wpi.png"
import Divider from "semantic-ui-react/dist/commonjs/elements/Divider/Divider";
import List from "semantic-ui-react/dist/commonjs/elements/List/List";
import Label from "semantic-ui-react/dist/commonjs/elements/Label/Label";
import { Element } from 'react-scroll'
export default class Education extends React.Component {


    render(){
        return (
            <Container>
                <a name="education"></a>
                    <h2 align="center" className={"sub-heading"}>EDUCATION</h2>
                    <Divider/>
                        <Item.Group>
                            <Item>
                                <Item.Image size='tiny' src={wpi} />
                                <Item.Content>
                                    <Item.Header as='a'>Worcester Polytechnic Institute</Item.Header>
                                    <Item.Meta>Bachelors of Computer Science</Item.Meta>
                                    <Item.Description>
                                        <List bulleted relaxed>
                                            <List.Item>
                                                Minor in Data Science
                                            </List.Item>
                                            <List.Item>
                                                Graduated May 2019
                                            </List.Item>
                                            <List.Item>
                                                GPA: 3.57, Graduated with Distinction
                                            </List.Item>
                                        </List>
                                    </Item.Description>
                                    <Item.Extra>
                                        <Label basic color='gray'>
                                            Foundations of Data Science
                                        </Label>
                                        <Label basic color='gray'>
                                            Data Mining & Knowledge Discovery
                                        </Label>
                                        <Label basic color='gray'>
                                            Database Systems
                                        </Label>
                                        <Label basic color='gray'>
                                            Object Oriented Analysis & Design
                                        </Label>
                                        <Label basic color='gray'>
                                            Algorithms
                                        </Label>
                                        <Label basic color='gray'>
                                            Software Engineering
                                        </Label>
                                        <Label basic color='gray'>
                                            Software Security Engineering
                                        </Label>
                                        <Label basic color='gray'>
                                            Webware
                                        </Label>
                                    </Item.Extra>
                                </Item.Content>
                            </Item>
                            {/*Graduate*/}
                            <Divider/>
                            <Item>
                                <Item.Image size='tiny' src={wpi} />
                                <Item.Content>
                                    <Item.Header as='a'>Worcester Polytechnic Institute</Item.Header>
                                    <Item.Meta>Masters of Computer Science</Item.Meta>
                                    <Item.Description>
                                        <List bulleted relaxed>
                                            <List.Item>
                                                Concentration in Data Science
                                            </List.Item>
                                            <List.Item>
                                                Expected Graduation, May 2020
                                            </List.Item>
                                        </List>
                                    </Item.Description>
                                    <Item.Extra>
                                        <Label basic color='gray'>
                                            Artificial Intelligence
                                        </Label>
                                        <Label basic color='gray'>
                                            Information Security Management
                                        </Label>
                                        <Label basic color='gray'>
                                            Data Analytics
                                        </Label>
                                        <Label basic color='gray'>
                                            Analysis of Algorithms
                                        </Label>
                                        <Label basic color='gray'>
                                            Machine Learning in Computer Security
                                        </Label>
                                        <Label basic color='gray'>
                                            Big Data Management
                                        </Label>
                                    </Item.Extra>
                                </Item.Content>
                            </Item>
                        </Item.Group>

            </Container>
        )
    }
}