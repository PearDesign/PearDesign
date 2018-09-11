import React, { Component } from 'react';
import { MockBar } from './FeatureBar';

export class MockDesktop extends Component {
  render () {
    return(
      <div className="MockDesktop">
        <MockBar />
      </div>
    )
  }
}
