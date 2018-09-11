import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { PageHome } from './PageHome';
import { PageWork } from './PageWork';
import { PageProject } from './PageProject';
import { PageContact } from './PageContact';

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
