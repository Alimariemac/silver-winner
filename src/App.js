import './App.css';
import Main from './components/MainComponent';
import React, {Component} from 'react'
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import {IMAGES} from './Images'

class App extends Component {
  state = {
    loading:true
  }
  componentDidMount(){
    IMAGES.forEach((picture)=>{
        const img = new Image();
        img.src = picture.fileName;
       })
    demoAsyncCall().then(()=>
    this.setState({loading:false}))
//  IMAGES.forEach((picture)=>{
//   const img = new Image();
//   img.src = picture.fileName;
//  }));
  }
  render(){
    const { loading } = this.state;
    
    if(loading) {
      return <h1>Loading</h1>
    }
    return(
      <BrowserRouter>
        <div fluid className="App">
            <Main/>
        </div>
      </BrowserRouter>
    )
  }
}

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}

export default App;