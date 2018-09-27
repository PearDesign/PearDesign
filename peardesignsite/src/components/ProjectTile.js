import React, { Component } from 'react';

export class ProjectTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: null,
      title: null,
      tag: null,
    };
  }
  render(){

    /* function goToProject(e) {
      e.preventDefault();
      console.log('The link was clicked.');
    }
    */
    return (
      <div className="ProjectTile" href="#">
        <a href="" class="ProjectTile__imgLink"><img src={this.props.image} alt="" class="ProjectTile__img" /></a>
        <h3 class="ProjectTile__title">{this.props.title}</h3>
        <p class="ProjectTile__tag">{this.props.tag}</p>
      </div>
    );
  }
}
