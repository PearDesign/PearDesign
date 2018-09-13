// import axios
// https://reactjs.org/docs/forms.html
import React, { Component } from 'react';

export class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    alert('submitted');
    event.preventDefault();
  }

  handleIsStartupChange(e){
    e.preventDefault();
    this.setState({
      'isStartup': true,
    })
  }
  handleFormSubmission(e) {
    e.preventDefault();
    let data = this.state;
    // axios.post('/randomapiendpoint/', data=data)
    console.log("Here's the data!");
    console.log(data);
  }
  render() {
    return(
      <div className="Contact">
        <h1 className="Page__headline">Pear with us</h1>
        <p className="Page__subheadline">Here’s where some contact page copy would go. I haven’t finished it, but think it should maybe be two lines. How can we help?</p>
        <form name="contact" method="post" onSubmit={this.handleFormSubmission.bind(this)}>
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
            <h2 className="Contact__SectionHeader">Tell Us About Yourself</h2>
            <label>Name <input type="text" name="name"/></label>
            <label>Company <input type="text" name="company"/></label>
            <label>Email <input type="email" name="email"/></label>
            <label>Phone <input type="phone" name="phone"/></label>
          </div>
          <div className="Size">
            <h2 className="Contact__SectionHeader">Company size</h2>
            <label><input type="radio" name="startup" onChange={this.handleIsStartupChange.bind(this)}/>Startup</label>
            <label><input type="radio" name="smallbusiness"/> Small Business</label>
            <label><input type="radio" name="enterprise"/> Enterprise</label>
            <label><input type="radio" name="nonprofit"/> Non-Profit</label>
          </div>
          <div className="Budget">
            <h2 className="Contact__SectionHeader">Estimated Budget</h2>
            <label><input type="checkbox" name="small"/>$3k</label>
            <label><input type="checkbox" name="med"/> $3k - $5k</label>
            <label><input type="checkbox" name="large"/> $5k - $10k</label>
            <label><input type="checkbox" name="talk"/> Lets Talk</label>
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
