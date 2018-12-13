import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { LogoText } from './LogoText';
import { NavLinks } from './Links';

export class Nav extends Component {
  render() {

    return(
      <nav className="Nav">
        <div className="Nav__logo">
          <Link to={"/"}><LogoText /></Link>
        </div>
          <NavLinks />
      </nav>
    );
  }
}
