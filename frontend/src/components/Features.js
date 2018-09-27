import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import projects from '../projectdata';

export class Features extends Component {
  render () {
    return (
      <div className="Features">
        <Link to={projects.haf.url} className="Features__Tile--left">
          <img className="Features__Image" src={projects.haf.featuredImage} alt=""/>
          <h2 className="Features__Title">Custom Web Development</h2>
          <div href="" className="Features__link"><span>Happy Active Family</span></div>
        </Link>
        <Link to={projects.mari.url} className="Features__Tile--right">
          <img className="Features__Image" src={projects.mari.featuredImage} alt=""/>
          <h2 className="Features__Title">Digital Product Design</h2>
          <div className="Features__link"><span>Mari for Michigan</span></div>
        </Link>
        <div className="WorkLink">
          <Link to='/work' className="Button__Work--outline">
            See all work
          </Link>
        </div>
      </div>
    );
  }
}
