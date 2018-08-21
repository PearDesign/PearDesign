import React, { Component } from 'react';
import logo from '../assets/img/logo.svg';


export class NavBar extends Component {
  render() {
    const style = {
    };
    function goToPage(e) {
      e.preventDefault();
      console.log('The link was clicked.');
    }
    const pages = ['About', 'Services', 'Work'];
    const navLinks = pages.map(page => {
      return (
        <a href={'#' + page} className="NavBar__links" onClick={goToPage}>
          {page}
        </a>
      )
    });
    function goToContact(e) {
      e.preventDefault();
      console.log('The link was clicked.');
    }

    return (
      <nav style={style} class="NavBar">
        <a href="">
          <img class="NavBar__logo" src={logo} alt=""/>
        </a>

        <div class="NavBar__linksContainer">
          {navLinks}
          <button onClick={goToContact} class="button__hire--nav">
            Hire us
          </button>
        </div>
      </nav>
  )
  }
}
