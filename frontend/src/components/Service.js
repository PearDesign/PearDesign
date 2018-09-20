import React, { Component } from 'react';

export class Service extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: null,
      label: null,
    };
  }
  render(){
    return(
      <div className="Service">
        <img src={this.props.img} alt="" className="Service__Icon"/>
        <p className="Service__Label">{this.props.label}</p>
      </div>
    );
  }
}
