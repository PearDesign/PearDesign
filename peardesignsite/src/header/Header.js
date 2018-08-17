import React, { Component } from 'react';
import './header.css';
import { NavBar } from './NavBar'

export class Header extends Component {
  render() {
    return (
      <div className="Header">
        <NavBar />
        <h1>
          Pear Design is a full-service agency of developers, designers, and digital storytellers.
        </h1>

      </div>
    );
  }
}
