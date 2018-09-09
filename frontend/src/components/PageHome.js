import React, { Component } from 'react';
import { Header } from './Header';
import { Features } from './Features';
import { Services } from './Services';
import { Testimonials } from './Testimonials';

export class PageHome extends Component {
  render(){
    return(
      <div className="Home">
        <div className="PageTop">
          <h1 className="Home__headline">We are developers, designers, and digital storytellers.</h1>
          <p className="Home_subheadline">Pear Design is a full-service digital product agency, helping our clients build beautiful products from the initial seed to last byte.</p>
          <Features />
        </div>
        <Services />
        <Testimonials />
      </div>
    );
  }
}
