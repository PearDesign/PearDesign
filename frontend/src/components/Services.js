import React, { Component } from 'react';
import { Service } from './Service';
import webDevIcon from '../assets/icons/icon_webdev.png'

export class Services extends Component {
  render(){
    return(
      <div className="Services">
        <div className="Services__HeadlineContainer">
          <h2 className="Services__Headline">We started Pear Design because we love building things. Here is what we do best:</h2>
        </div>
        <Service
          img={webDevIcon}
          label="Web Development"
        />
        <Service
          img=""
          label="Interface Design"
        />
        <Service
          img=""
          label="User Experience"
        />
        <Service
          img=""
          label="Brand Identity"
        />
        <Service
          img=""
          label="Technical Consulting"
        />
        <Service
          img=""
          label="Hosting"
        />

      </div>
    );
  }
}
