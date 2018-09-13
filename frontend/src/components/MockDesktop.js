import React, { Component } from 'react';
import { MockBar } from './FeatureBar';


export class MockDesktop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundImage: '',
    }
  }

  render () {
    return(
      <div className="MockDesktop" style={{ backgroundImage: this.state.backgroundImage }}>
        <MockBar />
      </div>
    )
  }
}
