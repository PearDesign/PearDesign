import React, { Component } from 'react';
import logo from './logo.svg';
import './NavBar.css';


export class NavBar extends Component {
  render() {
    const style = {
      padding: 20,
    }
    const pages = ['about', 'services', 'work', 'contact'];
    const navLinks = pages.map(page => {
      return (
        <a href={'/' + page} className="NavBar__links">
          {page}
        </a>
      )
    });

    return (
      <nav style={style} class="NavBar">
        <a href="">
          <img class="NavBar__logo" src={logo}/>
        </a>

        <div class="NavBar__linksContainer">
          {navLinks}
        </div>
      </nav>
  )
  }
}
