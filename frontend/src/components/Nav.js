import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { LogoText } from './LogoText'

export class Nav extends Component {
  render() {
    const pages = ['Work', 'Contact'];
    const navLinks = pages.map(page => {
      return (
        <li className="Nav__link" key={page}>
          <Link to={"/" + page.toLowerCase()}>{page}</Link>
        </li>
      )
    });

    return(
      <nav className="Nav">
        <div className="Nav__logo">
          <Link to={"/"}><LogoText /></Link>
        </div>
        <div className="Nav__links">
            <ul>
              {navLinks}
            </ul>
        </div>
      </nav>
    );
  }
}
