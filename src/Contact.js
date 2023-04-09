import React from 'react';
import {Image, Header, Segment, Container, Grid, Icon} from 'semantic-ui-react'


export default class Contact extends React.Component {


    render() {
        return (
            <Container id={"contactDiv"} className="element">
                <h2 align="center" className={"white sub-heading"}>CONTACT</h2>
                <Grid stackable columns={3}>
                    <Grid.Column>
                        <a className={"white sub-heading"} href={"https://github.com/stevenmcateer"}>
                                <Icon color={"white"} name='github' size='large' />
                            Github
                        </a>
                    </Grid.Column>
                    <Grid.Column>
                        <a className={"white sub-heading"} href={"https://www.linkedin.com/in/steven-mcateer/"}>
                            <Icon color={"white"} name='linkedin' size='large' />
                            LinkedIn
                        </a>
                    </Grid.Column>
                    <Grid.Column>
                        <a className={"white sub-heading"} href={"mailto:smcateer@wpi.edu"}>
                            <Icon color={"white"} name='mail' size='large' />
                            stevenmcateer7@gmail.com
                        </a>
                    </Grid.Column>
                </Grid>

            </Container>
        )
    }
}