import React, { Component } from 'react';
import { ReactComponent as Moon } from '../assets/moon.svg';
import { ReactComponent as Sun } from '../assets/sun.svg';
import '../App.scss';

class DarkModeToggle extends Component {
  constructor(props) {
    super(props);

    if(JSON.parse(localStorage.getItem('DARK_MODE')) === true) {
      document.body.classList.add('dark-mode');
    }

    this.state = {
      darkMode: JSON.parse(localStorage.getItem('DARK_MODE')),
      active: false
    }

    this.handleModeChange = this.handleModeChange.bind(this);
  }

  handleModeChange() {
    if(!this.state.darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }

    this.setState({
      darkMode: (!this.state.darkMode)
    });
    localStorage.setItem('DARK_MODE', !this.state.darkMode);
  }

  render() {
    return (
      <React.Fragment>
      <div className = "modeIcon" onClick={this.handleModeChange} style={{width: "100px", height:"100px"}}></div>
      </React.Fragment>
    );
  }
}

export default DarkModeToggle;