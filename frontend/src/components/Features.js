import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import projects from '../projectdata';
import mariFeature from '../assets/images/mari/mariFeature.png';
import hafFeature from '../assets/images/haf/hafFeature.png';

export class Features extends Component {
  render () {
    return (
      <div className="Features">
        <Link to={projects.haf.url} className="Features__Tile--left">
          <div className="Features__ImageContainer">
            <div className="Features__Image" style={{ backgroundImage: 'url('+hafFeature+')'}}></div>
          </div>
          <div className="Features__Info">
            <h2 className="Features__Title">Custom Web Development</h2>
            <div href="" className="Features__link"><span>Happy Active Family</span></div>
          </div>
        </Link>
        <Link to={projects.mari.url} className="Features__Tile--right">
          <div className="Features__ImageContainer">
            <div className="Features__Image" style={{ backgroundImage: 'url('+mariFeature+')'}}></div>
          </div>
          <div className="Features__Info">
            <h2 className="Features__Title">Digital Product Design</h2>
            <div className="Features__link"><span>Mari for Michigan</span></div>
          </div>
        </Link>
      </div>
    );
  }
}
