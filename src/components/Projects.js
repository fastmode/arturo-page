import React, { Component } from 'react';
import './Projects.css';

class Projects extends Component {
  render() {
    return (
      <div className="container">
          <h3>Bong Christmas</h3>
          <p className="project-desc">Help Bong collect all m+a logos so he can save Christmas!  A fun game develoloped using the Phaser.js library.  I wanted to learn how to create a game, how to use spritemaps, and make it sorta fun.</p>
          <a href="https://s3.amazonaws.com/arturosandbox/games/bong-christmas/bong.html">
            <img src={require('../images/bong_christmas.png')} alt="Screenshot of Bong Christmas Game" align="center"></img>
          </a>
      </div>
    );
  }
}

export default Projects;