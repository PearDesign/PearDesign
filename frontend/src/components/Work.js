import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import projects from '../projectdata';

export class Work extends Component {
  componentDidMount() {
    // Scroll to the top of the page
    window.scrollTo(0,0);
  }

  render(){
    return(
      <div className="Work">
        <h1 className="Page__headline">The fruits of our labor:</h1>
        <div className="Grid">
          
          <Link to={projects.haf.url} className="Grid__Tile">
            <div className="hover"><span></span></div>
            <img src={projects.haf.featuredImage} alt=""/>
          </Link>

          <Link to={projects.mari.url} className="Grid__Tile">
            <div className="hover"><span></span></div>
            <img src={projects.mari.featuredImage} alt=""/>
          </Link>
          <Link to={projects.ewcc.url} className="Grid__Tile">
            <div className="hover"><span></span></div>
            <img src={projects.ewcc.featuredImage} alt=""/>
          </Link>
        </div>
      </div>
    );
  }
}
