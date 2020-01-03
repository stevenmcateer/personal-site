import React from 'react';
import {Image, Grid, Segment, Container, Card, Icon, GridColumn} from 'semantic-ui-react'
import Divider from "semantic-ui-react/dist/commonjs/elements/Divider/Divider";
import rushroster from "./RushRoster.png"
import spotify from "./Spotify MQP logo.png"
import mines from "./minesweeper.png"
import comp from "./data mining assist.png"
import nav from "./nav.png"
import meeting from "./meeting.jpg"
import image_learning from "./nn.jpg"
import nlp from "./nlp.jpg"
import iqp from "./iqp.jpg"
import Label from "semantic-ui-react/dist/commonjs/elements/Label/Label";

export default class Projects extends React.Component {


    render() {
        return (
            <Container>
                <a name="projects"></a>
                <h1 align="center" className={"sub-heading"}>PROJECTS</h1>
                <Divider/>
                <Grid stackable columns={3}>
                    <Grid.Column>
                        <Card fluid>
                            <Image src={nlp} wrapped ui={false}/>
                            <Card.Content>
                                <Card.Header>Open Ended Response Grading (NLP)</Card.Header>
                                <Card.Meta>
                                    <span className='date'>July 2019 - Present</span>
                                </Card.Meta>
                                <Card.Description>
                                    Leveraging machine learning models using pre-trained word embeddings to understand open-ended math responses and predict
                                    correctness grades. This repo has a Bidirectional Long Short Term Memory RNN, Random Forest, and an Ensemble model. The Ensemble
                                    model has yielded promising AUC scores and is currently the best model.
                                    <Divider/>
                                    <Label basic color='blue'>Random Forest</Label>
                                    <Label basic color='blue'>LSTM</Label>
                                    <Label basic color='blue'>Data Cleaning</Label>
                                    <Label basic color='blue'>Recurrent Neural Network</Label>
                                    <Label basic color='blue'>GloVe Embeddings</Label>
                                    <Label basic color='blue'>Natural Language Processing</Label>
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <Grid centered columns={1}>
                                    <Grid.Column>
                                        <a href={"https://github.com/stevenmcateer/NLPBackend"}>
                                            <Icon name="github">
                                                 github
                                            </Icon>
                                        </a>
                                    </Grid.Column>
                                </Grid>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card fluid>
                            <Image src={comp} wrapped
                                   ui={false}/>
                            <Card.Content>
                                <Card.Header>Data Mining Competition Site</Card.Header>
                                <Card.Meta>
                                    <span className='date'>June 2019</span>
                                </Card.Meta>
                                <Card.Description>
                                    Website used for user registration, predictions submissions and evaluation for the 2019
                                    ASSISTments Data Mining Competition. The site is built using Java, Spring Framework, and a
                                    Postgres database.
                                    <Divider/>
                                    <Label basic color='blue'>Java</Label>
                                    <Label basic color='blue'>Spring Framework</Label>
                                    <Label basic color='blue'>Postgres</Label>
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a href={"https://internal.assistments.org/CompetitionSite/users"}>
                                    <Icon name="external alternate">
                                        demo
                                    </Icon>
                                </a>
                            </Card.Content>
                        </Card>
                    </Grid.Column>

                    <Grid.Column>
                        <Card fluid>
                            <Image src={spotify} wrapped ui={false}/>
                            <Card.Content>
                                <Card.Header>Spotify Playlist Continuation</Card.Header>
                                <Card.Meta>
                                    <span className='date'>Sept. 2018 - April 2019</span>
                                </Card.Meta>
                                <Card.Description>
                                    This was my Major Qualifying Project (MQP) at WPI. The models takes an input Spotify playlist
                                    and produce a certain number of similar songs based on 4 different recommender models.
                                    <Divider/>
                                    <Label basic color='blue'>Python</Label>
                                    <Label basic color='blue'>Recommender Systems</Label>
                                    <Label basic color='blue'>Neural Networks</Label>
                                    <Label basic color='blue'>PyTorch</Label>
                                    <Label basic color='blue'>Nonlinear</Label>
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <Grid centered columns={1}>
                                    <Grid.Column>
                                        <a href={"https://github.com/SpotifyPlaylistMQP/mqp-core"}>
                                            <Icon name="github">
                                                github
                                            </Icon>
                                        </a>
                                    </Grid.Column>

                                </Grid>
                            </Card.Content>
                        </Card>
                    </Grid.Column>

                    <Grid.Column>
                        <Card fluid>
                            <Image src={mines} wrapped
                                   ui={false}/>
                            <Card.Content>
                                <Card.Header>Minesweeper Solver (CSP)</Card.Header>
                                <Card.Meta>
                                    <span className='date'>April 2019</span>
                                </Card.Meta>
                                <Card.Description>
                                    Constraint Satisfaction Problem (CSP) solver for my Artifical Intelligence class. The first
                                    part of this project implements a generic scheduler based on constraints,
                                    while the second part implements a solver for a Minesweeper game.
                                    <Divider/>
                                    <Label basic color='blue'>Python</Label>
                                    <Label basic color='blue'>Constraint Satisfaction</Label>
                                    <Label basic color='blue'>Logic</Label>
                                    <Label basic color='blue'>Probability</Label>
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a href={"https://github.com/stevenmcateer/csp-solver"}>
                                    <Icon name="github">
                                        github
                                    </Icon>
                                </a>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card fluid>
                            <Image src={image_learning} wrapped ui={false}/>
                            <Card.Content>
                                <Card.Header>Image Classification</Card.Header>
                                <Card.Meta>
                                    <span className='date'>March 2019</span>
                                </Card.Meta>
                                <Card.Description>
                                    Image learning project for my Artificial Intelligence class. There are two models used to classify images:
                                    Decision Tress and Artificial Nueral Networks.
                                    <Divider/>
                                    <Label basic color='blue'>Python</Label>
                                    <Label basic color='blue'>Artificial Neural Network</Label>
                                    <Label basic color='blue'>Decision Tree</Label>
                                    <Label basic color='blue'>Image Learning</Label>
                                    <Label basic color='blue'>Keras</Label>
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <Grid centered columns={1}>
                                    <Grid.Column>
                                        <a href={"https://github.com/stevenmcateer/image-learning"}>
                                            <Icon name="github">
                                                github
                                            </Icon>
                                        </a>
                                    </Grid.Column>
                                </Grid>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card fluid>
                            <Image src={rushroster} wrapped ui={false}/>
                            <Card.Content>
                                <Card.Header>Rush Roster</Card.Header>
                                <Card.Meta>
                                    <span className='date'>October 2018 - Present</span>
                                </Card.Meta>
                                <Card.Description>
                                    Streamlined full stack web app used for greek life recruitment. Handles profiles for potential
                                    new members, voting, and secure user accounts with a Firebase backend. This has been a side project for me
                                    over the past year, since my fraternity, Tau Kappa Epsilon uses it each year.
                                    <Divider/>
                                    <Label basic color='blue'>React</Label>
                                    <Label basic color='blue'>Firebase</Label>
                                    <Label basic color='blue'>JavaScript</Label>
                                    <Label basic color='blue'>Postgres</Label>
                                    <Label basic color='blue'>CSS</Label>
                                    <Label basic color='blue'>Semantic UX</Label>
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <Grid centered columns={2}>
                                    <Grid.Column>
                                        <a href={"https://github.com/stevenmcateer/RushRoster"}>
                                            <Icon name="github">
                                                github
                                            </Icon>
                                        </a>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <a href={"http://fp-rushroster.herokuapp.com/"}>
                                            <Icon name="external alternate">
                                                demo
                                            </Icon>
                                        </a>
                                    </Grid.Column>
                                </Grid>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card fluid>
                            <Image src={meeting} wrapped
                                   ui={false}/>
                            <Card.Content>
                                <Card.Header>Meeting Buddy</Card.Header>
                                <Card.Meta>
                                    <span className='date'>March 2018</span>
                                </Card.Meta>
                                <Card.Description>
                                    This Android app was the final project for my Mobile & Ubiquitous class. It features a When2Meet-style
                                    scheduler alongside location based attendance tracking using GeoFences.
                                    <Divider/>
                                    <Label basic color='blue'>Android</Label>
                                    <Label basic color='blue'>Java</Label>
                                    <Label basic color='blue'>Geofence</Label>
                                    <Label basic color='blue'>Mobile</Label>
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a href={"https://github.com/stevenmcateer/MeetingBuddy"}>
                                    <Icon name="github">
                                        github
                                    </Icon>
                                </a>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card fluid>
                            <Image src={iqp} wrapped
                                   ui={false}/>
                            <Card.Content>
                                <Card.Header>Smart Heating Analysis Utility</Card.Header>
                                <Card.Meta>
                                    <span className='date'>October - December 2017</span>
                                </Card.Meta>
                                <Card.Description>
                                    This was my Interactive Qualifying Project (IQP) at WPI. My team used smart
                                    heating devices to determine ways to save energy and money for students living in
                                    multiple-occupation homes. We gathered log data from the Worcester-Bosch smart heating
                                    thermostats to predict heating consumption in winter months using various metrics. My team
                                    won the <a href={"https://www.wpi.edu/news/wpi-project-team-awarded-green-apple-work-university-worcester-uk"}>
                                    Green Apple Environmental Award</a> from The Green Organisation for our work.
                                    <Divider/>
                                    <Label basic color='blue'>Data Collection</Label>
                                    <Label basic color='blue'>Smart Thermostats</Label>
                                    <Label basic color='blue'>Data Analysis</Label>
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a href={"https://www.wpi.edu/news/wpi-project-team-awarded-green-apple-work-university-worcester-uk"}>
                                    <Icon name="link">
                                        article
                                    </Icon>
                                </a>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card fluid>
                            <Image src={nav} wrapped
                                   ui={false}/>
                            <Card.Content>
                                <Card.Header>Hospital Pathfinder</Card.Header>
                                <Card.Meta>
                                    <span className='date'>April 2017</span>
                                </Card.Meta>
                                <Card.Description>
                                    Hospital pathfinder application for Faulker Hospital in Boston. This project was built with a team of 10 students
                                    in my software engineering class. We used the Agile methodology and used scrum meetings and
                                    one week sprints to reach our final product.
                                    <Divider/>
                                    <Label basic color='blue'>Java</Label>
                                    <Label basic color='blue'>JavaFX</Label>
                                    <Label basic color='blue'>Agile</Label>
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <a href={"https://github.com/stevenmcateer/HospitalPathfinder"}>
                                    <Icon name="github">
                                        github
                                    </Icon>
                                </a>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}