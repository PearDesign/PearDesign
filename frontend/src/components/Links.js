import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class NavLinks extends Component{
  render() {
    const pages = ['Work', 'Contact'];
    const Links = pages.map(page => {
      return (
        <li className="Nav__link" key={page}>
          <Link to={"/" + page.toLowerCase()}>{page}</Link>
        </li>
      )
    });

    return (
        <ul className="Nav__links">
          {Links}
        </ul>
    );
  }

}
