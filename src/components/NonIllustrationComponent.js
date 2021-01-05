import {React, Fragment, useRef, useEffect} from 'react';
import {Row, Col, Container} from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll';
import CSSRulePlugin from "gsap/CSSRulePlugin"
import {TimelineLite, Power2, gsap} from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


function Top(props){
    return(
    <img src = {props.project.fullImage} className="pageMainImg"/>
    )
}
function TLDR(props){
    return(
        <Fragment>
            <h3>TL;DR</h3>
            <p>{props.project.tldr}</p>
        </Fragment>
    )
}

function Role(props){
    return(
        <Fragment>
            <h3>My Role</h3>
            <p>{props.project.role}</p>
        </Fragment>
    )
}

function Why(props){
    return(
        <Fragment>
            <h3>Why</h3>
            <p>{props.project.why}</p>
        </Fragment>
    )
}

function Research(props){
    return(
        <Fragment>
            <h3>Research</h3>
            <p>{props.project.research}</p>
        </Fragment>
    )
}

function Iterations(props){
    return(
        <Fragment>
            <h3>Iterations</h3>
            <p>{props.project.iterations}</p>
        </Fragment>
    )
}

function NextSteps(props){
    return(
        <Fragment>
            <h3>Learnings & Next Steps</h3>
            <p>{props.project.iterations}</p>
        </Fragment>
    )
}
// TL;DR
// My Role
// Why
// Research
// Iterations
// Learnings & Next Steps

function GetProject(props){
    let imageReveal = CSSRulePlugin.getRule('.img-container:after')

    const project = props.project
    const numbers = project.numbers.map(m=>{
            return(
            <Col key = {m.id}>
            <h1>{m.num}</h1>
            <p>{m.text}</p>
            </Col>
            )
        })
        
        //imageReveal is afefecting all. need it to affect just that specific one.
    useEffect(()=>{
        let count = 0
        const sections = Array.from(document.querySelectorAll("section"))
        sections.forEach(sec=>{
            let tl = new gsap.timeline(
                {
                    paused: true, 
                }
            ).to(sec.querySelector(".img-container"), 0, {css:{visibility:"visible"}})
            .to(sec.querySelector(".black-container"), 1.4, {width:"0%", ease:Power2.easeInOut})
            .from(sec.querySelector(".image-moving"), 1.4, {scale:1.6, ease:Power2.easeInOut, delay:-1.6})
            ScrollTrigger.create({
                animation:tl,
                trigger:sec,
                start:"center bottom",
                end:"+=400",
                markers:true
        })
        console.log(count+=1)
        })
        
        
    })
        
return(
    <div>
        <Top project= {project}/>
         
    <Container>
            <div className = "spacer"></div>
            <Row>
            </Row>
            <Row>
                <div className = "col col-md-8 offset-md-4">
                    <TLDR project = {project}/>
                    <Role project = {project}/>
                    <Why project = {project}/>
                    <Research project = {project}/>
                </div>
            </Row>
                    {project.id === 1 &&
                    <Row>
                    <Col>
                    <div className = "spacer"></div>
                        <div>
                            <div className = "grid1">
                                <section>
                                    <div className="black-container"></div>
                                <div className = "img-container " style = {{gridColumn: "1 / span 3", gridRow: "1 / span 6"}}>
                                    <img className = "image-moving" src = {project.images[0].src} />
                                </div>
                                </section>
                                <section>
                                <div className="black-container"></div>
                                <div className = "img-container" style = {{gridColumn: " 5 / span 3", gridRow: "4 / span 6"}}>
                                    <img className = "image-moving" src = {project.images[1].src} />
                                </div>
                                </section>
                            {/* make img-container width = width of image (add width and height to images)??? */} 
                        </div>
                        </div>
                    <div className = "spacer"></div>
                    <p className="p-small">previous versions</p>
                    </Col>
                    </Row>
                    }
            <Row>
                <div className = "col col-md-8 offset-md-4">
                    <Iterations project = {project}/>
                </div>
            </Row>
            {project.id === 1 &&
                    <Row>
                    <Col>
                    <div className = "spacer"></div>
                    <div>
                            <div className = "grid1">
                                <section>
                                <div className="black-container"></div>
                                <div className = "img-container" style = {{gridColumn: "1 / span 3", gridRow: "1 / span 6"}}>
                                    <img className = "image-moving" src = {project.images[0].src} />
                                </div>
                                </section>
                                <section>
                                <div className="black-container"></div>
                                <div className = "img-container" style = {{gridColumn: " 5 / span 3", gridRow: "4 / span 6"}}>
                                    <img className = "image-moving" src = {project.images[1].src} />
                                </div>
                                </section>
                            {/* make img-container width = width of image (add width and height to images)??? */} 
                        </div>
                        </div>
                        
                    <div className = "spacer"></div>
                    <p className="p-small">final version</p>
                    </Col>
                    </Row>
            }
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
                <NextSteps project = {project}/>
                </div>
            </Row>
        </Container>
       
       </div>
)
}

export default GetProject;