// import axios from 'axios';
import React, { Component } from 'react';

export class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    let input = event.target;
    let value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    this.setState({[input.name]: value})
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    // axios.post('peardesign.co/api/formsubmit', this.state)
  }

  render() {
    return(
      <div className="Contact">
        <h1 className="Page__headline">Pear with us</h1>
        <p className="Page__subheadline">Here’s where some contact page copy would go. I haven’t finished it, but think it should maybe be two lines. How can we help?</p>
        <form name="contact" method="post" onSubmit={this.handleSubmit.bind(this)}>
          <input type="hidden" name="form-name" value="contact" />
          <div className="How">
            <div className={this.state.webdev ? 'input selected' : 'input notselected'}>
              <input type="checkbox" name="webdev" onChange={this.handleChange.bind(this)} id='webdev'/>
              <label htmlFor='webdev'><span className="checkbox">Web Development</span></label>
            </div>
            <div className={this.state.webdev ? 'input selected' : 'input notselected'}>
              <input type="checkbox" name="interface" onChange={this.handleChange.bind(this)} id='interface'/>
              <label htmlFor='interface'><span className='checkbox'>Interface Design</span></label>
            </div>
            <label><input type="checkbox" name="ux" onChange={this.handleChange.bind(this)} />User Experience</label>
            <label><input type="checkbox" name="brand" onChange={this.handleChange.bind(this)} />Brand Design</label>
            <label><input type="checkbox" name="consult" onChange={this.handleChange.bind(this)} />Tech Consulting</label>
            <label><input type="checkbox" name="host" onChange={this.handleChange.bind(this)} />Web Hosting</label>
          </div>
          <div className="AboutYou">
            <h2 className="Contact__SectionHeader">Tell Us About Yourself</h2>
            <input placeholder="Name" type="text" name="name" onChange={this.handleChange.bind(this)}/>
            <input placeholder="Company" type="text" name="company" onChange={this.handleChange.bind(this)}/>
            <input placeholder="Email" type="email" name="email" onChange={this.handleChange.bind(this)}/>
            <input placeholder="Phone" type="phone" name="phone" onChange={this.handleChange.bind(this)}/>
          </div>
          <div className="Size">
            <h2 className="Contact__SectionHeader">Company size</h2>
            <label><input type="radio" name="size" onChange={this.handleChange.bind(this)}/>Startup</label>
            <label><input type="radio" name="size" onChange={this.handleChange.bind(this)}/> Small Business</label>
            <label><input type="radio" name="size" onChange={this.handleChange.bind(this)}/> Enterprise</label>
            <label><input type="radio" name="size" onChange={this.handleChange.bind(this)}/> Non-Profit</label>
          </div>
          <div className="Budget">
            <h2 className="Contact__SectionHeader">Estimated Budget</h2>
            <label htmlFor='budget3k'><input id='budget3k' value='otherthing' type="radio" name="budget" onChange={this.handleChange.bind(this)}/>$3k</label>
            <label><input value='randomthing' type="radio" name="budget" onChange={this.handleChange.bind(this)}/> $3k - $5k</label>
            <label><input value='thirdthing' type="radio" name="budget" onChange={this.handleChange.bind(this)}/> $5k - $10k</label>
            <label><input value='fourthing' type="radio" name="budget" onChange={this.handleChange.bind(this)}/> Lets Talk</label>
          </div>
          <div className="TellUs">
            <h2>Tell us about your project</h2>
            <textarea name="message" onChange={this.handleChange.bind(this)} ></textarea>
          </div>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    );
  }
}
