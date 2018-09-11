import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export class PageWork extends Component {
  render(){
    return(
      <div className="Work">
        <h1 className="Page__headline">Our work:</h1>
        <Link to="/project" className="Grid_1">
        </Link>
        <Link to="/" className="Grid_2">
        </Link>
        <Link to="/" className="Grid_3">
        </Link>
        <Link to="/" className="Grid_4">
        </Link>
        <Link to="/" className="Grid_5">
        </Link>
      </div>
    );
  }
}
