import React, { Component } from 'react';
import { Service } from './Service'

export class Services extends Component {
  render(){
    return(
      <div className="Services">
        <div className="Services__HeadlineContainer">
          <h2 className="Services__Headline">We started Pear Design because we love building things. Here's what we do best:</h2>
        </div>
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
        <Service />
      </div>
    );
  }
}
