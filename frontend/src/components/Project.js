import React, { Component } from 'react';
import { MockDesktop } from './MockDesktop';
import { MockBar } from './FeatureBar';

export class Project extends Component {
  // NOTE: THIS NEEDS A CONSTRUCTOR
  constructor(props) {
    super(props);
    const projects = {
      'haf': {
        'name': 'Happy Active Family',
        'featuredImage': 'http://placecage.com/800/400',
        'subheadline': '',
        'introtext': '',
        'services': ['Web Development', 'UI / UX Design', 'Brand Identity', 'Web Hosting'],
        'desktopmocks': ['http://placecage.com/800/400'],
        'mobilemocks': ['http://placecage.com/800/400', 'http://placecage.com/800/400', 'http://placecage.com/800/400'],
        'writeup_p1': '',
        'writeup_p2': '',
        'testimonial': '',
        'attrib': '',
      },
      'mari': {
        'name': 'Mari For MI',
        'featuredImage': 'http://placecage.com/800/400',
        'subheadline': '',
        'introtext': '',
        'services': ['Web Development', 'UI / UX Design', 'Brand Identity', 'Web Hosting'],
        'desktopmocks': ['http://placecage.com/800/400'],
        'mobilemocks': ['http://placecage.com/800/400', 'http://placecage.com/800/400', 'http://placecage.com/800/400'],
        'writeup_p1': '',
        'writeup_p2': '',
        'testimonial': '',
        'attrib': '',
      }
    }

    this.state = {
      'project': projects[props.match.params.project_name],
    }
  }
  render(){
    const services = this.state.project.services.map(service => {
      return(
        <li className="Project__Service" key={service}>{service}</li>
      )
    });

    return(
      <div className="Project">
        <h1 className="Page__headline">{this.state.project.name}</h1>
        <div className="Project__Feature">
          <MockBar />
          <img src={this.state.project.featuredImage} alt=""/>
        </div>
        <div className="Project__Intro">
          <div className="Project__SubHeadline">
            <h2>{this.state.project.subheadline}</h2>
            <p>{this.state.project.introtext}</p>
          </div>
          <div className="Project__Services">
            <span>Services</span>
            <ul>
              {services}
            </ul>
          </div>
        </div>
        <div className="Project__MocksDesktop">
          <MockDesktop
            backgroundImage={'url('+this.state.project.desktopmocks[0]+')'}
          />
          <MockDesktop />
          <MockDesktop />
          <MockDesktop />

        </div>
        <div className="Project__WriteUp">
          <p className="Project__WriteUpText">{this.state.project.writeup_p1}</p>
          <h3 className="Project__Testimonial">
            {this.state.project.testimonial}
          </h3>
          <span className="Project__TestimonialAttrib">{this.state.project.attrib}</span>
          <p className="Project__WriteUpText">{this.state.project.writeup_p2}</p>
        </div>
        <div className="Project__MocksMobile">
          <div className="MockMobile__Container">
            <div className="MockMobile">
              <img src={this.state.project.mobilemocks[0]} alt=""/>
            </div>
            <div className="MockMobile">
              <img src={this.state.project.mobilemocks[1]} alt=""/>
            </div>
            <div className="MockMobile">
              <img src={this.state.project.mobilemocks[2]} alt=""/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
