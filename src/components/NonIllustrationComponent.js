import {React, Fragment, useEffect} from 'react';
import {Row, Col, Container} from 'react-bootstrap'
import {Left1Right2, DoubleImage, OneOffsetImg, FullOne, OneFarOffsetImg} from '../components/ProjectImages'
import Fade from 'react-reveal/Fade';
import {Power2, gsap} from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocation } from "react-router-dom";

//page sections

function Top(props){
    return(
        <section>
        <div className="black-container pageMainImg" ></div>
            <div className = "img-container pageMainImg" style={{width:"100%", height:"70vh"}}>
                <img className = "image-moving" src = {props.project.fullImage} style={{objectFit:"cover", width:"100%"}}/>
            </div>
        </section>
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
    console.log(props.project.images[0].w)
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

function Scroll(){
document.querySelector("body").scrollTo(0,0)
}


// const scrollLoad = async () =>{
//     const sections = Array.from(document.querySelectorAll("section"))

//     new Promise((resolve, reject)=>{
//         document.querySelector("body").scrollTo(0,0);
//     }).then(()=>{
//         sections.forEach(sec=>{
//             let tl = new gsap.timeline(
//                 {
//                     paused: true, 
//                 }
//             ).to(sec.querySelector(".img-container"), 0, {css:{visibility:"visible"}})
//             .to(sec.querySelector(".black-container"), 1.4, {height:"0%", ease:Power2.easeInOut})
//             .from(sec.querySelector(".image-moving"), 1.4, {scale:1.6, ease:Power2.easeInOut, delay:-1.6})
//             ScrollTrigger.create({
//                 animation:tl,
//                 trigger:sec,
//                 start:"top bottom",
//         })
//         }) 
//     })
// }


function GetProject(props){
    // let imageReveal = CSSRulePlugin.getRule('.img-container:after')
    const { pathname } = useLocation();
    const project = props.project

    const colorSection = (project.numbers ? project.numbers.map(m=>{
            return(
            <Col key = {m.id} col-md-4>
            <h3 style = {{fontSize:"6rem", textAlign:"center"}}>{m.num}</h3>
            <p style={{textAlign:"center"}}>{m.text}</p>
            </Col>
            )
        }) : <Col><h3>{project.quote}</h3><p>-{project.attribution}</p></Col>)
        
        
        useEffect(()=>{
            
          Scroll()  
          
            const sections = Array.from(document.querySelectorAll("section"))
            sections.forEach(sec=>{
                let tl = new gsap.timeline(
                    {
                        paused: true, 
                    }
                ).to(sec.querySelector(".img-container"), 0, {css:{visibility:"visible"}})
                .to(sec.querySelector(".black-container"), 1.4, {height:"0%", ease:Power2.easeInOut})
                .from(sec.querySelector(".image-moving"), 1.4, {scale:1.6, ease:Power2.easeInOut, delay:-1.6})
                ScrollTrigger.create({
                    animation:tl,
                    trigger:sec,
                    start:"top bottom",
            })
            }) 
            
        }, [pathname]);   
   
        
return(
    <div>
        <Top project= {project}/> 
    <Container>
            <div className = "spacer"></div>
            <Fade>
            <Row>
                <div className = "col col-md-8 offset-md-4">
                    <TLDR project = {project}/>
                    </div>
            </Row>
            </Fade>
            <Fade>
            <Row>
                <div className = "col col-md-8 offset-md-4">
                    <Role project = {project}/>
                </div>
            </Row>
            </Fade>
            <Fade>
            <Row>
                <div className = "col col-md-8 offset-md-4">
                    <Why project = {project}/>
                </div>
            </Row>
            </Fade>
            
             {project.id === 0 &&
            <>
                <FullOne image = {project.images[0]} />  
                <p className = "p-small">Old Foursquare site</p> 
                <DoubleImage img1 = {project.images[1]} img2= {project.images[2]} /> 
                <p className = "p-small">Old Factual and Placed sites</p> 
            </>
            }
            {project.id === 2 &&
            <>
                <FullOne image = {project.images[2]} />   
                <FullOne image = {project.images[3]} /> 
            </>
            }
            
    
{/* make img-container width = width of image (add width and height to images)??? 
</div> */}
            <Fade>
            <Row>
                <div className = "col col-md-8 offset-md-4">
                    <Research project = {project}/>
                </div>
            </Row>
            </Fade>

       {project.id === 0 &&
                 <Left1Right2 img1={project.images[3]} img2={project.images[4]} img3={project.images[5]}/>  
        }
        {project.id === 1 &&
                 <Left1Right2 img1={project.images[2]} img2={project.images[1]} img3={project.images[0]}/>  
        }
        {project.id === 3 &&
                 <FullOne image = {project.images[0]}/>  
        }
         <Fade>
            <Row>
                <div className = "col col-md-8 offset-md-4">
                    <Iterations project = {project}/>
                </div>
            </Row>
            </Fade>
            {project.id ===0 &&
            <>
             <DoubleImage img1={project.images[6]} img2={project.images[7]}/>
            <DoubleImage img1 = {project.images[9]} img2={project.images[8]}/>  
            <FullOne image = {project.images[10]} />
            </>
            }
            {project.id === 1 &&
                   <DoubleImage img1={project.images[3]} img2={project.images[4]}/>
                    }
                    {project.id === 2 &&
                <DoubleImage img1 = {project.images[0]} img2={project.images[1]}/>  
            }
            {project.id === 3 &&
                 <FullOne image = {project.images[1]} />  
            }
            
           
            </Container>

            <div className = "spacer"></div>
            <div className="stats" style= {{background:`${project.color}`}}>
                <Container>
                    <Fade>
                <Row>
                    {colorSection}
             </Row>
             </Fade>
             
                </Container>     
                
            </div> 
            <div className= "spacer"></div> 
            <Container>
            {project.id === 1 &&
                   <OneOffsetImg image={project.images[5]}/>
                    }
            {project.id === 2 &&
                <OneOffsetImg image = {project.images[4]} />  
            }
    <Fade>
        
            <Row>
            {project.id === 0 &&
                <FullOne image = {project.images[11]} />  
            }
                <div className = "col col-md-8 offset-md-4">
                <NextSteps project = {project}/>
                </div>
            </Row>
            </Fade>
        </Container>
       
       </div>
)
}

export default GetProject;
{/* <div className = "grid1">
<section style = {{gridColumn: " 1/ span 2", gridRow: "1 / span 2"}}>
    <div className="black-container"></div>
    <div className = "img-container">
        <div className = "image-moving"  style={{background:`url(${project.images[2].src})`, backgroundSize:"cover", width: `${project.images[2].w}px`, height:`${project.images[2].h}px`}}/>
    </div>
</section>
<section style = {{gridColumn: "2 / span 2", gridRow: "3 / span 1"}}>
        <div className="black-container"></div>
        <div className = "img-container " style = {{width: `${project.images[0].w}px`, height:`${project.images[0].h}px`}}>
        <img className = "image-moving" src = {project.images[0].src} style={{width: `${project.images[0].w}px`, height:`${project.images[0].h}px`}}/>
    </div>
</section>
<section style = {{gridColumn: " 2 / span 2", gridRow: "5 / span 2"}}>
    <div className="black-container"></div>
    <div className = "img-container" style = {{width: `${project.images[1].w}px`, height:`${project.images[1].h}px`}}>
        <img className = "image-moving" src = {project.images[1].src} style={{width: `${project.images[1].w}px`, height:`${project.images[1].h}px`}}/>
    </div>
</section>
    
{/* make img-container width = width of image (add width and height to images)??? 
</div> */}


{/* {project.id === 1 &&
                    <section style={{ position: "relative", overflow:"hidden"}}>
                    <div className = "c-projects">
                    <div className = "c-projects_row">
                        <div className="c-projects_item" >
                            <div className = "c-projects_inner">
                                <div className = "c-projects_wrap">
                                <img src = {project.images[2].src} style = {{width:"400px", height:"auto"}}/>
                                </div>
                            </div>

                        </div>
                    <div className="c-projects_item">
                        <div className = "c-projects_inner">
                            <div style={{position:"relative"}}>
                            <img src = {project.images[1].src} style = {{width:"400px", height:"auto"}}/>
                            </div>
                        </div>
                </div>
                <div className="c-projects_item">
                        <div className = "c-projects_inner">
                            <div style={{position:"relative"}}>
                            <img src = {project.images[0].src} style = {{width:"400px", height:"auto"}}/>
                            </div>
                        </div>
                </div>
                </div>
                </div>
                </section>}
                 */}

                    
                    
                     {/* <div className = "spacer"></div>
                    <section>
                        
                        <Row>
                            <Col className = "col-md-6">
                            <div className="black-container" style = {{height:`${project.images[2].h}px`, width:"100%"}}></div>
                            <div className = "img-container" style = {{height:`${project.images[2].h}px`}}>
                                <img className = "image-moving img-responsive" src = {project.images[2].src} style = {{width:"100%"}}/>
                            </div>
                            </Col>
                        </Row>
                    </section>
                    <div className = "spacer"></div>
                    <section>
                        <Row>
                            <Col className = "offset-md-3 col-md-6">
                            <div className="black-container" style = {{height:`${project.images[1].h}px`, width:"100%"}}></div>
                            <div className = "img-container" style = {{height:`${project.images[1].h}px`}}>
                                <img className = "image-moving img-responsive" src = {project.images[1].src} style = {{width:"100%"}}/>
                            </div>
                            </Col>
                        </Row>
                    </section>
                    <div className = "spacer"></div>
                    <section>
                        <Row>
                            <Col className = "offset-md-5 col-md-7">
                            <div className="black-container" style = {{height:`${project.images[0].h}px`, width:"100%"}}></div>
                            <div className = "img-container" style = {{height:`${project.images[0].h}px`, width:"100%"}}>
                                <img className = "image-moving img-responsive" src = {project.images[0].src} style = {{width: "100%"}}/>
                            </div>
                            <p className= "p-small">previous versions</p>
                            </Col>
                        </Row>
                        
                    </section>
                    <div className = "spacer"></div>
                    </>
                    } */}