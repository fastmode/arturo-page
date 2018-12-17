import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Projects from './components/Projects'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Projects />
      </div>
    );
  }
}

export default App;
