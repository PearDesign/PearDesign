import React, { Component } from 'react';

export class Testimonials extends Component {
  render(){
    return(
      <div className="Testimonials">
        <div className="Testimonials__Container">
          <h2 className="Testimonials__Headline">Kind words from people we've peared with:</h2>
          <p className="Testimonials__Quote">This is a complimentary quote from a client to show they were really happy with the services provided. It would go on for three to four sentences, which we can ask nicely for them to provide. But we can launch the site without them initially.</p>
          <p className="Testimonials__Attribution">- Firstname Lastname, Position at Company Company</p>
        </div>
      </div>
    );
  }
}
