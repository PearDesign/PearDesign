import React, { Component } from 'react';

export class Features extends Component {
  render () {
    return (
      <div className="Features">
        <div className="Features__Tile--left">
          <div className="Features__Image">
          </div>
          <h2 className="Features__Title">Custom Web Development</h2>
          <a href="" className="Features__link"><span>Featured Project: Happy Active Family</span></a>
        </div>
        <div className="Features__Tile--right">
          <div className="Features__Image"></div>
          <h2 className="Features__Title">Digital Product Design</h2>
          <a href="" className="Features__link"><span>Featured Project: Mari for Michigan</span></a>
        </div>
      </div>
    );
  }
}
