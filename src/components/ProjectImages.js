import {React} from 'react';
import {Row, Col} from 'react-bootstrap'

export function Left1Right2(props){
    
    return(
        
        <>
            <Row>
                <Col className = "col-12 col-md-6 p-0">
                <section>
                    <div className="black-container" style = {{width:"100%", height:"100%"}}></div>
                    <div className = "img-container pb-3">
                        <img className = "image-moving img-responsive" src = {props.img1.src} style = {{width:"100%"}}/>
                    </div>
                    </section>
                </Col>  
                <Col className = "col-12 col-md-6 p-0">
                <section>
                    <div className="black-container " style = {{width:"100%", height:"100%"}}></div>
                    <div className = "img-container pl-md-3 pb-3" >
                        <img className = "image-moving img-responsive" src = {props.img2.src} style = {{width:"100%"}}/>
                    </div>
                    </section>
                    <section>
                    <div className="black-container" style = {{width:"100%", height:"100%"}}></div>
                    <div className = "img-container pl-md-3" >
                        <img className = "image-moving img-responsive" src = {props.img3.src} style = {{width:"100%"}}/>
                    </div>
                    </section>
                </Col>  
            </Row>
        </>
    )
}

export function DoubleImage(props){
    
    return(
        
        <>
            <Row>
                <Col className = "col-12 col-md-6 p-0">
                <section>
                    <div className="black-container" style = {{width:"100%", height:"100%"}}></div>
                    <div className = "img-container pr-md-2 pb-3">
                        <img className = "image-moving img-responsive" src = {props.img1.src} style = {{width:"100%"}}/>
                    </div>
                    </section>
                </Col>  
                <Col className = "col-12 col-md-6 p-0">
                <section>
                    <div className="black-container" style = {{width:"100%", height:"100%"}}></div>
                    <div className = "img-container pl-md-2">
                        <img className = "image-moving img-responsive" src = {props.img2.src} style = {{width:"100%"}}/>
                    </div>
                    </section>
                </Col>  
            </Row>
        </>
    )
}

export function OneOffsetImg(props){
    
    return(
        
        <>
            <Row>
                <Col className = "col-12 offset-md-4 col-md-8">
                <section>
                    <div className="black-container" style = {{width:"100%", height:"100%"}}></div>
                    <div className = "img-container pr-md-2 pb-3">
                        <img className = "image-moving img-responsive" src = {props.image.src} style = {{width:"100%"}}/>
                    </div>
                    </section>
                </Col>  
            </Row>
        </>
    )
}

export function OneFarOffsetImg(props){   
    return(
        <>
            <Row>
                <Col className = "col-12 offset-md-4 col-md-4">
                <section>
                    <div className="black-container" style = {{width:"100%", height:"100%"}}></div>
                    <div className = "img-container pr-md-2 pb-3">
                        <img className = "image-moving img-responsive" src = {props.image.src} style = {{width:"100%"}}/>
                    </div>
                    </section>
                </Col>  
            </Row>
        </>
    )
}


export function FullOne(props){
    
    return(
        
        <>
            <Row>
                <Col className = "col-12 p-0">
                <section>
                    <div className="black-container" style = {{width:"100%", height:"100%"}}></div>
                    <div className = "img-container pb-3">
                        <img className = "image-moving img-responsive" src = {props.image.src} style = {{width:"100%"}}/>
                    </div>
                    </section>
                </Col>  
                </Row>
        </>
    )
}

