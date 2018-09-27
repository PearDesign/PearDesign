import axios from 'axios';
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
  handleChange(event){
    event.preventDefault();
    let input = event.target;
    this.setState({
      [input.name]: input.value
    })
    console.log(input.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    let data = this.state;
    // axios.post('/randomapiendpoint/', data=data)
    axios.post('peardesign.co/api/formsubmit', this.state)
  }
  render() {
    return(
      <div className="Contact">
        <h1 className="Page__headline">Pear with us</h1>
        <p className="Page__subheadline">Here’s where some contact page copy would go. I haven’t finished it, but think it should maybe be two lines. How can we help?</p>
        <form name="contact" method="post" onSubmit={this.handleSubmit.bind(this)}>
          <input type="hidden" name="form-name" value="contact" />
          <div className="How">
            <label><input value="webdev" type="checkbox" name="how" checked="checked" onChange={this.handleChange.bind(this)}/>Web Development</label>
            <label><input value="interface" type="checkbox" name="how" onChange={this.handleChange.bind(this)}/>Interface Design</label>
            <label><input value="ux" type="checkbox" name="how" onChange={this.handleChange.bind(this)}/>User Experience</label>
            <label><input value="brand" type="checkbox" name="how" onChange={this.handleChange.bind(this)}/>Brand Design</label>
            <label><input value="consult" type="checkbox" name="how" onChange={this.handleChange.bind(this)}/>Tech Consulting</label>
            <label><input value="host" type="checkbox" name="how" onChange={this.handleChange.bind(this)}/>Web Hosting</label>
          </div>
          <div className="AboutYou">
            <h2 className="Contact__SectionHeader">Tell Us About Yourself</h2>
            <input type="text" name="name" placeholder="Name" onChange={this.handleChange.bind(this)}/>
            <input type="text" name="company" placeholder="Company" onChange={this.handleChange.bind(this)}/>
            <input type="email" name="email" placeholder="Email" onChange={this.handleChange.bind(this)}/>
            <input type="phone" name="phone" placeholder="Phone" onChange={this.handleChange.bind(this)}/>
          </div>
          <div className="Size">
            <h2 className="Contact__SectionHeader">Company size</h2>
            <label><input type="radio" name="size" onChange={this.handleChange.bind(this)}/>Startup</label>
            <label><input type="radio" name="size" checked="checked" onChange={this.handleChange.bind(this)}/> Small Business</label>
            <label><input type="radio" name="size" onChange={this.handleChange.bind(this)}/> Enterprise</label>
            <label><input type="radio" name="size" onChange={this.handleChange.bind(this)}/> Non-Profit</label>
          </div>
          <div className="Budget">
            <h2 className="Contact__SectionHeader">Estimated Budget</h2>
            <label><input type="radio" name="budget" onChange={this.handleChange.bind(this)}/>$3k</label>
            <label><input type="radio" name="budget" checked="checked" onChange={this.handleChange.bind(this)}/> $3k - $5k</label>
            <label><input type="radio" name="budget" onChange={this.handleChange.bind(this)}/> $5k - $10k</label>
            <label><input type="radio" name="budget" onChange={this.handleChange.bind(this)}/> Lets Talk</label>
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
