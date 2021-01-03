import React, {Component} from 'react'
import {Collapse} from 'reactstrap'
import {PROJECTS} from '../shared/projects'
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Slide from 'react-reveal/Slide'
import ScrollAnimation from 'react-animate-on-scroll';
import LazyLoad from 'react-lazyload';

class Accordion extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            projects: PROJECTS
        }
    }


    render(){
        const directory = this.state.projects.map(project => {
            let title = <h2 data-event={project.id+1} style = {{textTransform:"uppercase"}}>{project.name}</h2>
            let tag = project.tags.split('\n').map(i=>{
                return <h4 style = {{textTransform:"uppercase"}}>{i}</h4>
            })
            return(
                <Container className="accordion-lines">
                    
            <div key = {project.id}> 
               
                    <Row>
                    <div className = "order-lg-2 col-lg-6 offset-lg-1 mainContainer" style={{backgroundColor:`${project.color}`, backgroundImage: `url(${project.backgroundImage})`}}>
                            <h1 className = "largeText textTop">{project.text1}</h1>
                            <div className = "mainImg inset " style = {{backgroundImage: `url(${project.images[0].src})`}}></div>   
                            <h1 className = "largeText textBottom">{project.text2}</h1>
                       </div>
                       <span className = "spacer"></span>
                        <div className = "col-lg-5">
                        {title}
                        <div style= {{paddingTop: "1rem", paddingBottom:"1rem"}}>{tag}</div>
                        <p style= {{paddingTop: "1rem"}}>{project.description}</p>
                        <NavLink to={`${project.id}`}>
                            <h3 style= {{paddingTop: "1rem", paddingBottom: "1rem"}}>More</h3>
                        </NavLink>
                        </div>
                    </Row>
                    <div className = "spacer"></div>
            </div>
           
            </Container>
            )
        })
        return(
            <div className="full-width">
                {directory}
            </div>
        )
    }
}

export default Accordion;
