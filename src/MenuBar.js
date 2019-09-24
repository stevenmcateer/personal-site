import React, {createRef} from 'react';
import {Menu, Container, Link, Image} from 'semantic-ui-react'
import resume from "./Steven-McAteer-Resume.pdf"
import Ref from "semantic-ui-react/dist/commonjs/addons/Ref/Ref";

export default class MenuBar extends React.Component {
    state = {activeItem: 'about'};

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state
        return (
            <Container>
                <Menu fixed={"top"}>
                    {/*<Menu.Header>*/}
                        {/*<Header>*/}
                            {/*<Image circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' />*/}
                            {/*Steven McAteer*/}
                        {/*</Header>*/}
                    {/*</Menu.Header>*/}
                    <Menu.Menu position="right">
                    </Menu.Menu>
                    <Menu.Item
                        href='#about'
                        name='about'
                        active={activeItem === 'about'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        href='#education'
                        name='education'
                        active={activeItem === 'education'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        href='#experience'
                        name='experience'
                        active={activeItem === 'experience'}
                        onClick={this.handleItemClick}
                    />

                    <Menu.Item
                        href="#projects"
                        name='projects'
                        active={activeItem === 'projects'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        href={resume} download
                        name='resume'
                        active={activeItem === 'resume'}
                        onClick={this.handleItemClick}
                    />
                </Menu>
            </Container>
        )
    }
}