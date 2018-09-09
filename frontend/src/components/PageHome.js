import React, { Component } from 'react';
import { Features } from './Features';
import { Services } from './Services';
import { Testimonials } from './Testimonials';

export class PageHome extends Component {
  render(){
    return(
      <div className="Home">
        <Features />
        <Services />
        <Testimonials />
      </div>
    );
  }
}
