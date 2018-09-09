import React, { Component } from 'react';
import { PageHome } from './PageHome';

export class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return(
      <div className="PageTop">
        <h1 className="Home__headline">We are developers, designers, and digital storytellers.</h1>
        <p className="Home_subheadline">Pear Design is a full-service digital product agency, helping our clients build beautiful products from the initial seed to last byte.</p>
        <Features />
      </div>


      <PageHome />
    );
  }
}
