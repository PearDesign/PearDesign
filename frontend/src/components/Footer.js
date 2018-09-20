import React, { Component } from 'react';
import { PearWhite } from './PearWhite'

export class Footer extends Component {
  render() {
    return(
      <div className="Footer">
        <div className="Footer__Content">
          <PearWhite />
          <p className="Footer__Reserved">All rights reserved. Pear Design is a brand of Pear Group, LLC.</p>
        </div>
      </div>
    );
  }
}
