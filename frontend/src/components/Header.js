import React, {Component} from 'react';
import { Nav } from './Nav';

export class Header extends Component {
  render () {
    return (
      <div className="Header">
        <Nav />
      </div>
    );
  }
}
