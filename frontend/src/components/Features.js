import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class Features extends Component {
  render () {
    return (
      <div className="Features">
        <Link to='/project/haf/' className="Features__Tile--left">
          <div className="Features__Image">
          </div>
          <h2 className="Features__Title">Custom Web Development</h2>
          <div href="" className="Features__link"><span>Happy Active Family</span></div>
        </Link>
        <Link to='/project/mari4mi/' className="Features__Tile--right">
          <div className="Features__Image"></div>
          <h2 className="Features__Title">Digital Product Design</h2>
          <span>Mari for Michigan</span>
        </Link>
      </div>
    );
  }
}
