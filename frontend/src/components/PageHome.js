import React, { Component } from 'react';
import { Features } from './Features';
import { Services } from './Services';
import { Testimonials } from './Testimonials';

export class PageHome extends Component {
  render(){
    return(
      <div className="Home">
        <p className="Home_subheadline">Pear Design is a full-service digital product agency, helping our clients build beautiful products from the initial seed to last byte.</p>
        <Features />
        <Services />
        <Testimonials />
      </div>
    );
  }
}
