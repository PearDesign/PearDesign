import React, { Component } from 'react';
import { Header } from './Header';
import { Services } from './Services';

export class PageHome extends Component {
  render(){
    return(
      <div className="Home">
        <div className="PageTop">
          <h1 className="Home__headline">We are developers, designers, and digital storytellers.</h1>
          <p className="Home_subheadline">Pear Design is a full-service digital product agency, helping our clients build beautiful products from the initial seed to last byte.</p>
          <div className="Features">
            <div className="Features__Tile--left">
              <div className="Features__Image">
              </div>
              <h2 className="Features__Title">Custom Web Development</h2>
              <a href="#" className="Features__link"><span>Featured Project: Happy Active Family</span></a>
            </div>
            <div className="Features__Tile--right">
              <div className="Features__Image"></div>
              <h2 className="Features__Title">Digital Product Design</h2>
              <a href="#" className="Features__link"><span>Featured Project: Mari for Michigan</span></a>
            </div>
          </div>
          <Services />
        </div>
      </div>
    );
  }
}
