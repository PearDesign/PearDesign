import React, { Component } from 'react';

export class Testimonials extends Component {
  render(){
    return(
      <div className="Testimonials">
        <div className="Testimonials__Container">
          <h2 className="Testimonials__Headline">Kind words from people we've peared with:</h2>
          <span>
            <p className="Testimonials__Quote">I've partnered with many development teams in the course of my career, and Pear is hands down the best professional experience I've had to date. They are tech wizards with business savvy and a strategic mindset. They were the perfect partners to co-create our website, our consumer facing chrome extension, and our marketing materials. They listen, they understood our audience and our problems, and they made every part of our dream a reality.</p>
            <p className="Testimonials__Attribution">- Ridge Montes, CEO of Impakt</p>
          </span>
        </div>
      </div>
    );
  }
}
