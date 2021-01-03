import {React, Fragment} from 'react';
import {Row, Col, Container} from 'react-bootstrap'

function GetProject(props){
    const project = props.project
     const numbers = project.numbers.map(m=>{
            return(
            <Col key = {m.id}>
            <h1>{m.num}</h1>
            <p>{m.text}</p>
            </Col>
            )
        })
return(
    <Fragment>
         <img src = {project.images[0].src} className="pageMainImg"/>
    <Container>
            <div className = "spacer"></div>
            <Row>
            </Row>
            <Row>
                <div className = "col col-md-8 offset-md-4">
                    <h3>TL;DR</h3>
                    <p>{project.tldr}</p>
                    <h3>My Role</h3>
                    <p>{project.role}</p>
                    <h3>Why</h3>
                    <p>{project.why}</p>
                    <h3>Research</h3>
                    <p>{project.research}</p>
                    <h3>Iterations</h3>
                    <p>{project.iterations}</p>
                </div>
            </Row>
            </Container>
            <div className = "spacer"></div>
            <div className="stats" style= {{background:`${project.color}`}}>
                <Container>
                <Row >
                    {numbers}
             </Row>
                </Container>      
            </div> 
            
            <Container>
            <div className = "spacer"></div>
            <Row>
                <div className = "col col-md-8 offset-md-4">
                    <h3>Learnings & Next Steps</h3>
                    <p>{project.iterations}</p>
                </div>
            </Row>
        </Container>
       
       </Fragment>
)
}

export default GetProject;