import './App.css';
import Main from './components/MainComponent';
import React, {Component} from 'react'
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import {IMAGES} from './Images'

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