import React, { Component } from 'react';

export class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Home__hero">
          <h1 className="Home__heroHeadline">Pear Design is a full-service agency of developers, designers, and digital storytellers.</h1>
          <p className="Home__heroText">Here's a bit of sample text here.</p>
          <button className="button__work--header">See our work</button>
        </div>


      </div>
    );
  }
}
