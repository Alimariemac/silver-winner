import React, {Component} from 'react'
import { Fragment } from 'react';
import {Row, Col, Container} from 'react-bootstrap'
import Accordion from './AccordionComponent'
import {EXPERIENCE} from '../shared/experience'
import {ReactComponent as Rainbow} from '../assets/rainbow.svg'
import {ReactComponent as FlowerDrop} from '../assets/flower-drop.svg'
import {ReactComponent as Matcha} from '../assets/matcha.svg'
import Hangel from "../assets/Hangel.jpg"
import Header from './HeaderComponent';

class Home extends Component{
    constructor(props) {
        super(props); 
        this.state = {
            experience: EXPERIENCE
        }
    }

    render(){
        return(
            <Fragment>
                <Container fluid>
                    <Header/>
                <Container>
                    <div className = "spacer"/>
                <Row>
                <Col>
                        <h1 className="center">
                        Experiences that enchant <Rainbow className = "inlineImg"/>. I run on pups and plants <span><img className = "inlineImg" src ={Hangel}/></span>, books and
                        Stardew Valley<FlowerDrop className = "inlineImg"/>
                        </h1>
                    </Col>
                </Row>
                <div className = "spacer"/>
                <Row>
                    <Col>
                    <h5 className="center">designer • illustrator • coder</h5>
                    </Col>
                </Row>
                <div className = "spacer"/>
                <div className = "spacer"/>
                </Container>
                <Accordion />
                <Container>
                <div className = "spacer"/>
                <Row>
                    <Col>
                    <h4 style={{paddingBottom: "2rem"}}>Social</h4>
                    <a target = "blank" href = "https://dribbble.com/Alimariemac">Dribbble</a><br/><br/>
                    <a target = "blank" href = "https://www.linkedin.com/in/aliciamariemaccara/">LinkedIn</a><br/><br/>
                    <a target = "blank" href = "https://www.instagram.com/alimariemac">Instagram</a>
                    </Col>
                </Row>
                <div className = "spacer"/>
                </Container>
                </Container>
            </Fragment>
        )
    }
}

export default Home;