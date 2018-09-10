import React, { Component } from 'react';
import { PageHome } from './PageHome';
import { PageWork } from './PageWork';

export class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headline: "We are developers, designers, and digital storytellers.",
    };
  }

  render() {
    return(
      <div className="Page">
        <div className="PageTop">
          <h1 className="Page__headline">{this.state.headline}</h1>
        </div>
        <PageHome />
      </div>
    );
  }
}
