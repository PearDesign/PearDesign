import React, { Component } from 'react';

export class PageContact extends Component {
  render() {
    return(
      <div className="Contact">
        <h1 className="Page__headline">Pear with us</h1>
        <p className="Page__subheadline">Here’s where some contact page copy would go. I haven’t finished it, but think it should maybe be two lines. How can we help?</p>
        <form name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <div className="How">
            <label><input type="checkbox" name="development"/>Web Development</label>
            <label><input type="checkbox" name="webdev"/>Interface Design</label>
            <label><input type="checkbox" name="webdev"/>User Experience</label>
            <label><input type="checkbox" name="webdev"/>Brand Design</label>
            <label><input type="checkbox" name="webdev"/>Tech Consulting</label>
            <label><input type="checkbox" name="webdev"/>Web Hosting</label>
          </div>
          <div className="AboutYou">
            <h2 className="Contact__SectionHeader"></h2>
            <label>Name <input type="text" name="name"/></label>
            <label>Company <input type="text" name="company"/></label>
            <label>Email <input type="email" name="email"/></label>
            <label>Phone <input type="phone" name="phone"/></label>
          </div>
          <div className="Size">
            <h2 className="Contact__SectionHeader">Company size</h2>
            <label><input type="checkbox" name="startup"/>Startup</label>
            <label><input type="checkbox" name="smallbusiness"/> Small Business</label>
            <label><input type="checkbox" name="enterprise"/> Enterprise</label>
            <label><input type="checkbox" name="nonprofit"/> Non-Profit</label>
          </div>
          <div className="Budget">
            <h2 className="Contact__SectionHeader">Estimated Budget</h2>
            <label><input type="checkbox" name="small"/>$3k</label>
            <label><input type="checkbox" name="med"/> $3k - $5k</label>
            <label><input type="checkbox" name="large"/> $5k - $10k</label>
            <label><input type="checkbox" name="talk"/> Let's Talk</label>
          </div>
          <div className="TellUs">
            <h2>Tell us about your project</h2>
            <textarea name="message"></textarea>
          </div>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    );
  }
}
