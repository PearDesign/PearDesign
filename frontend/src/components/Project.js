import React, { Component } from 'react';
import { MockDesktop } from './MockDesktop';
import { MockBar } from './FeatureBar';
import projects from '../projectdata'

export class Project extends Component {
  constructor(props) {
    super(props);

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
          <MockDesktop
            backgroundImage={'url('+this.state.project.desktopmocks[1]+')'}
          />
          <MockDesktop
            backgroundImage={'url('+this.state.project.desktopmocks[2]+')'}
          />
          <MockDesktop
            backgroundImage={'url('+this.state.project.desktopmocks[3]+')'}
          />

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
