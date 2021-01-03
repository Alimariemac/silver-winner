import './App.css';
import Main from './components/MainComponent';
import React, {Component} from 'react'
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Container from 'react-bootstrap/Container'


class App extends Component {
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