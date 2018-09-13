import React, { Component } from 'react';
import { Service } from './Service';
import webdev from '../assets/icons/icon_webdev.png';
import ui from '../assets/icons/icon_innov.png';
import ux from '../assets/icons/icon_concept.png';
import brand from '../assets/icons/icon_creative.png';
import consult from '../assets/icons/icon_chip.png';
import cloud from '../assets/icons/icon_cloud.png';

export class Services extends Component {
  render(){
    return(
      <div className="Services">
        <div className="Services__HeadlineContainer">
          <h2 className="Services__Headline">We started Pear Design because we love building things. Here is what we do best:</h2>
        </div>
        <Service
          img={webdev}
          label="Web Development"
        />
        <Service
          img={ui}
          label="Interface Design"
        />
        <Service
          img={ux}
          label="User Experience"
        />
        <Service
          img={brand}
          label="Brand Identity"
        />
        <Service
          img={consult}
          label="Technical Consulting"
        />
        <Service
          img={cloud}
          label="Hosting"
        />

      </div>
    );
  }
}
