import './App.css';
import Main from './components/MainComponent';
import React, {Component, useEffect, useState, componentDidMount} from 'react'
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Container from 'react-bootstrap/Container'
import {IMAGES} from './Images'

// function LoadingComponent(){
//  const [isLoading,setIsLoading] = useState(true);
//     useEffect(()=>{
//       const imgs = [

//       ]
//     })
// }
// class App extends Component(){
//   constructor(props) {
//     super(props);
//   }
//   componentDidMount(){
   
//   ;
// }
//   const [imgsLoaded, setImgsLoaded] = useState(false)
//   useEffect(()=>{
//   const loadImage = image => {
//     return new Promise((resolve, reject) => {
//       const loadImg = new Image()
//       loadImg.src = image.url
//       // wait 2 seconds to simulate loading time
//       loadImg.onload = () =>
//         setTimeout(() => {
//           resolve(image.url)
//         }, 2000)

//       loadImg.onerror = err => reject(err)
//     })
//   }
//   Promise.all(IMAGES.map(image => loadImage(image)))
//   .then(() => setImgsLoaded(true))
//   .catch(err => console.log("Failed to load images", err))
// }, [])
class App extends Component {
  componentDidMount(){
 IMAGES.forEach((picture)=>{
  const img = new Image();
  img.src = picture.fileName;
 });
  }
  render(){
    return(
      <BrowserRouter>
        <div fluid className="App">
           <Main />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;