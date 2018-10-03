import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { LogoText } from './LogoText';
import { PearWhite } from './PearWhite';
import { NavLinks } from './Links';

class Footer extends Component {

  render() {
    let wrapperClass;
    let isContact = this.props.location.pathname.toLowerCase().indexOf("/contact");
    console.log(isContact);

    if (isContact !== -1) {
      wrapperClass = "Footer--hide";
    } else {
      wrapperClass = "Footer";
    };

    return(
      <div className={wrapperClass}>
        <div className="Footer__cta">
          <h2 className="Footer__ctaHeadline">
            Building something cool? <span><Link to="/contact">Pear with us</Link></span>
          </h2>
        </div>
        <div className="Footer__Content">
          <div className="Footer__Container">
            <LogoText />
            <div className="Footer__Social">

            </div>
          </div>
          <div className="Footer__Container">
            <p className="Footer__Reserved">All rights reserved. Pear Design is a brand of Pear Group, LLC.</p>
            <NavLinks />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Footer);
