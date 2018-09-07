import React, { Component } from 'react';
import { LogoText } from './LogoText'

export class Nav extends Component {
  render() {

    function goToPage(e) {
      e.preventDefault();
      console.log('The link was clicked.');
    }
    const pages = ['About', 'Work', 'Contact'];
    const navLinks = pages.map(page => {
      return (
        <a href={'/' + page} className="Nav__link" onClick={goToPage}>
          {page}
        </a>
      )
    });

    return(
      <nav className="Nav">
        <div className="Nav__logo">
          <LogoText />
        </div>
        <div className="Nav__links">
          {navLinks}
        </div>
      </ nav>
    );
  }
}
