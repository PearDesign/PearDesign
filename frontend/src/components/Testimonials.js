import React, { Component } from 'react';

export class Testimonials extends Component {
  render(){
    return(
      <div className="Testimonials">
        <div className="Testimonials__Container">
          <h2 className="Testimonials__Headline">Kind words from people we're proud to work with:</h2>
          <p className="Testimonials__Quote">Testimonial quote</p>
          <p className="Testimonials__Attribution">- Firstname Lastname, Position at Company Company</p>
        </div>
      </div>
    );
  }
}
