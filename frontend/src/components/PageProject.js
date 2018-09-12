import React, { Component } from 'react';
import { MockDesktop } from './MockDesktop';

export class PageProject extends Component {
  // NOTE: THIS NEEDS A CONSTRUCTOR
  render(){
    return(
      <div className="Project">
        <h1 className="Page__headline">Project Title</h1>
        <div className="Project__Feature">
        </div>
        <div className="Project__Intro">
          <div className="Project__SubHeadline">
            <h2>Here is a headline about the project</h2>
            <p>We'll make some big ol' huge mountains! There's too many complicated things in our life already. All you're worried about is this nice outside shape. Always follow the angles. Don't just cover it all up -- leave these spots'!</p>
          </div>
          <div className="Project__Services">
            <span>Services</span>
          <ul>
            <li className="Project__Service">Web Development</li>
            <li className="Project__Service">UI / UX Design</li>
            <li className="Project__Service">Brand Identity</li>
            <li className="Project__Service">Web Hosting</li>
          </ul>
          </div>
        </div>
        <div className="Project__MocksDesktop">
          <MockDesktop />
          <MockDesktop />
          <MockDesktop />
          <MockDesktop />

        </div>
        <div className="Project__WriteUp">
          <p className="Project__WriteUpText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
          <h3 className="Project__Testimonial">
            This is a complimentary quote from a client to show they were really happy with the services provided.
          </h3>
          <span className="Project__TestimonialAttrib">Client Firstname, Lastname from Company</span>
          <p className="Project__WriteUpText">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className="Project__MocksMobile">
          <div className="MockMobile__Container">
            <div className="MockMobile">
            </div>
            <div className="MockMobile">
            </div>
            <div className="MockMobile">
            </div>
          </div>
        </div>
      </div>
    );
  }
}
