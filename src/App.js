import './App.css';
import Main from './components/MainComponent';
import React, {useEffect, useState} from 'react'
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import {IMAGES} from './Images'

function App() {

// componentDidMount(){
//   const[isLoading, setIsLoading] = useState(true)
//   IMAGES.map((src)=>{
//     const img = new Image();
//     img.src = src;
//     img.onload = () => {
//       this.setState({loading:false});
//     }
//     })
//     console.log(this.state.loading)
//   }


const [isLoading, setIsLoading] = useState(true)
useEffect(()=>{
  const imgs= IMAGES
  cacheImages(imgs)
  
})

const cacheImages = async(srcArray)=>{
  const promises = await srcArray.map((src)=>{
    return new Promise(function(resolve, reject){
      const img = new Image();
      img.src = src
      img.onload = resolve();
      img.onerror = reject();
    })
  });
  await Promise.all(promises);
  setIsLoading(false)
}
    return(
      <div className = 'App'>
        {isLoading
        ?
        <div>
        <h1>Loading</h1>
      </div>
      :
       <BrowserRouter>
        <div fluid className="App">
            <Main/>
        </div>
      </BrowserRouter>}
      </div>
        
    )
  }

// const cacheImages = async function(IMAGES) {
//   const promises = await IMAGES.map((src)=>{
//     const img = new Image();
//     img.src = src;
//     img.onload = resolve()
//     img.onerror = reject()
//   })
//   await Promise.all(promises)
//   this.setState({loading:false});
// };

export default App;