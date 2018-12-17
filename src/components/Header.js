import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="title">
        <h1>Hola</h1>
        <h1>my name is,</h1>
        <h1 className="text-flicker-in-glow">Arturo</h1>
        <p className="tracking-in-contract-bck-bottom">
            This is a site to show some of the fun front end tools and techniques I'm working with.  Not really a portfolio or an organized page.  Just a bunch of stuff I can add on here and I can see the result.  Sorta of a sandbox, although I don't particularly like that term.  
        </p>
      </div>
    );
  }
}

export default Header;