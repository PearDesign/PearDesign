import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home } from './Home';
import { Work } from './Work';
import { Project } from './Project';
import { Contact } from './Contact';

export class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headline: "We are developers, designers, and digital storytellers.",
    };
  }

  render() {
    return(
      <Router>
        <div className="Page">

        </div>
      </Router>
    );
  }
}
