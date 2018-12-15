import React, { Component } from 'react';
import { MockBar } from './FeatureBar';


export class MockDesktop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: props.image,
    }
  }

  render () {
    return(
      <div className="MockDesktop">
        <MockBar />
        <div className="MockDesktop__image"  style={{ backgroundImage: this.state.image }}></div>
      </div>
    )
  }
}
