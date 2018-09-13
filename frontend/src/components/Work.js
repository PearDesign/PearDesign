import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import projects from '../projectdata';

export class Work extends Component {
  render(){
    return(
      <div className="Work">
        <h1 className="Page__headline">Our work:</h1>
        <div className="Grid__Top">
          <Link to={projects.haf.url} className="Grid__Tile--1">
            <img src={projects.haf.featuredImage} alt=""/>
          </Link>
          <Link to="/project" className="Grid__Tile--2">
          </Link>
        </div>
        <div className="Grid__Bottom--Left">
          <Link to="/project" className="Grid__Tile--3">
          </Link>
          <Link to="/project" className="Grid__Tile--4">
          </Link>
        </div>
        <div className="Grid__Bottom--Right">
          <Link to="/project" className="Grid__Tile--5">
          </Link>
        </div>
      </div>
    );
  }
}
