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
          <div className="how">
            <div className={this.state.webdev ? 'how__input--selected' : 'how__input--notselected'}>
              <input type="checkbox" name="webdev" onChange={this.handleChange.bind(this)} id='webdev'/>
              <label htmlFor='webdev'><span className="checkbox">Web Development</span></label>
            </div>
            <div className={this.state.ui ? 'how__input--selected' : 'how__input--notselected'}>
              <input type="checkbox" name="ui" onChange={this.handleChange.bind(this)} id='ui'/>
              <label htmlFor='ui'><span className='checkbox'>Interface Design</span></label>
            </div>
            <div className={this.state.ux ? 'how__input--selected' : 'how__input--notselected'}>
              <input type="checkbox" name="ux" onChange={this.handleChange.bind(this)} id='ux'/>
              <label htmlFor='ux'><span className="checkbox">User Experience</span></label>
            </div>
            <div className={this.state.brand ? 'how__input--selected' : 'how__input--notselected'}>
              <input type="checkbox" name="brand" onChange={this.handleChange.bind(this)} id='brand'/>
              <label htmlFor='brand'><span className="checkbox">Brand Design</span></label>
            </div>
            <div className={this.state.tech ? 'how__input--selected' : 'how__input--notselected'}>
              <input type="checkbox" name="tech" onChange={this.handleChange.bind(this)} id='tech'/>
              <label htmlFor='tech'><span className="checkbox">Tech Consulting</span></label>
            </div>
            <div className={this.state.host ? 'how__input--selected' : 'how__input--notselected'}>
              <input type="checkbox" name="host" onChange={this.handleChange.bind(this)} id='host'/>
              <label htmlFor='host'><span className="checkbox">Web Hosting</span></label>
            </div>
          </div>
          <div className="you">
            <h2 className="Contact__SectionHeader">Tell Us About Yourself</h2>
            <input className={this.state.name ? 'you__input--selected' : 'you__input--notselected'} placeholder="Name" type="text" name="name" onChange={this.handleChange.bind(this)}/>
            <input className={this.state.company ? 'you__input--selected' : 'you__input--notselected'} placeholder="Company" type="text" name="company" onChange={this.handleChange.bind(this)}/>
            <input className={this.state.email ? 'you__input--selected' : 'you__input--notselected'} placeholder="Email" type="email" name="email" onChange={this.handleChange.bind(this)}/>
            <input className={this.state.phone ? 'you__input--selected' : 'you__input--notselected'} placeholder="Phone" type="phone" name="phone" onChange={this.handleChange.bind(this)}/>
          </div>
          <div className="size">
            <h2 className="Contact__SectionHeader">Company size</h2>
            <label htmlFor='startup'><input id='startup' type="radio" name="size" onChange={this.handleChange.bind(this)}/>Startup</label>
            <label htmlFor='smbus'><input id='smbus' type="radio" name="size" onChange={this.handleChange.bind(this)}/> Small Business</label>
            <label htmlFor='enterp'><input id='enterp' type="radio" name="size" onChange={this.handleChange.bind(this)}/> Enterprise</label>
            <label htmlFor='nonprof'><input id='nonprof' type="radio" name="size" onChange={this.handleChange.bind(this)}/> Non-Profit</label>
          </div>
          <div className="budget">
            <h2 className="Contact__SectionHeader">Estimated Budget</h2>
            <label htmlFor='budget3k'><input id='budget3k' value='otherthing' type="radio" name="budget" onChange={this.handleChange.bind(this)}/>$3k</label>
            <label htmlFor='budget5k'><input id='budget5k' value='budget5k' type="radio" name="budget" onChange={this.handleChange.bind(this)}/> $3k - $5k</label>
            <label htmlFor='budget10k'><input id='budget10k' value='budget10k' type="radio" name="budget" onChange={this.handleChange.bind(this)}/> $5k - $10k</label>
            <label htmlFor='budgettalk'><input id='budgettalk' value='budgettalk' type="radio" name="budget" onChange={this.handleChange.bind(this)}/> Lets Talk</label>
          </div>
          <div className="tell">
            <h2>Tell us about your project</h2>
            <textarea name="message" onChange={this.handleChange.bind(this)} ></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}
