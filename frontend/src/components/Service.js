import React, { Component } from 'react';
import { Pear } from './Pear'

export class Service extends Component {
  render(){
    return(
      <div className="Service">
        <Pear />
        <p className="Service__Label">Label</p>
      </div>
    );
  }
}
