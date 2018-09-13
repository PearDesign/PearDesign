import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import projects from '../projectdata';

export class Work extends Component {
  render(){
    return(
      <div className="Work">
        <h1 className="Page__headline">Our work:</h1>
        <div className="Grid__Top">
          <Link to={projects.haf.url} className="Grid__Tile">
            <img src={projects.haf.featuredImage} alt=""/>
          </Link>
          <Link to={projects.mari.url} className="Grid__Tile">
            <img src={projects.haf.featuredImage} alt=""/>
          </Link>
        </div>
      </div>
    );
  }
}
