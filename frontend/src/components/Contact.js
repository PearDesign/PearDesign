// import axios from 'axios';
import React, { Component } from 'react';

export class Contact extends Component {
  componentDidMount() {
    // Scroll to the top of the page
    window.scrollTo(0,0);
  }

  constructor(props){
    super(props);
    this.state = {}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    let input = event.target;
    let value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    this.setState({[input.name]: value});
  }

  handleRadio(event){
    let input = event.target; 
    let value = event.target.type === 'radio' ? event.target.checked : event.target.value;
    this.setState({[input.name]: value});
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
            <h2 className="Contact__SectionHeader">Tell us about yourself</h2>
            <div className="you__form">
              <input className={this.state.name ? 'you__input--selected' : 'you__input--notselected'} placeholder="Name" type="text" name="name" onChange={this.handleChange.bind(this)}/>
              <input className={this.state.company ? 'you__input--selected' : 'you__input--notselected'} placeholder="Company" type="text" name="company" onChange={this.handleChange.bind(this)}/>
              <input className={this.state.email ? 'you__input--selected' : 'you__input--notselected'} placeholder="Email" type="email" name="email" onChange={this.handleChange.bind(this)}/>
              <input className={this.state.phone ? 'you__input--selected' : 'you__input--notselected'} placeholder="Phone" type="phone" name="phone" onChange={this.handleChange.bind(this)}/>
            </div>
          </div>
          <div className="type">
            <h2 className="Contact__SectionHeader">Company type</h2>
            <div className="type__form">
              <div className={this.state.startup ? 'type__input--selected' : 'type__input--notselected'}>
                <input type="checkbox" name="startup" onChange={this.handleChange.bind(this)} id='startup'/>
                <label htmlFor='startup'><span className="checkbox">Startup</span></label>
              </div>
              <div className={this.state.smbus ? 'type__input--selected' : 'type__input--notselected'}>
                <input type="checkbox" name="smbus" onChange={this.handleChange.bind(this)} id='smbus'/>
                <label htmlFor='smbus'><span className="checkbox">Small Business</span></label>
              </div>
              <div className={this.state.enterp ? 'type__input--selected' : 'type__input--notselected'}>
                <input type="checkbox" name="enterp" onChange={this.handleChange.bind(this)} id='enterp'/>
                <label htmlFor='enterp'><span className="checkbox">Enterprise</span></label>
              </div>
              <div className={this.state.nonprof ? 'type__input--selected' : 'type__input--notselected'}>
                <input type="checkbox" name="nonprof" onChange={this.handleChange.bind(this)} id='nonprof'/>
                <label htmlFor='nonprof'><span className="checkbox">Non Profit</span></label>
              </div>
            </div>
          </div>
          <div className="budget">
            <h2 className="Contact__SectionHeader">Estimated budget</h2>
            <div className={this.state.budget3k ? 'budget__input--selected' : 'budget__input--notselected'}>
              <input type="checkbox" name="budget3k" onChange={this.handleChange.bind(this)} id='budget3k'/>
              <label htmlFor='budget3k'>$3k</label>
            </div>
            <div className={this.state.budget5k ? 'budget__input--selected' : 'budget__input--notselected'}>
              <input type="checkbox" name="budget5k" onChange={this.handleChange.bind(this)} id='budget5k'/>
              <label htmlFor='budget5k'>$3k - $5k</label>
            </div>
            <div className={this.state.budget10k ? 'budget__input--selected' : 'budget__input--notselected'}>
              <input type="checkbox" name="budget10k" onChange={this.handleChange.bind(this)} id='budget10k'/>
              <label htmlFor='budget10k'>$5k - $10k</label>
            </div>
            <div className={this.state.budgettalk ? 'budget__input--selected' : 'budget__input--notselected'}>
              <input type="checkbox" name="budgettalk" onChange={this.handleChange.bind(this)} id='budgettalk'/>
              <label htmlFor='budget3k'>Let's Talk</label>
            </div>
          </div>
          <div className="tell">
            <h2>Tell us about your project</h2>
            <textarea name="message" onChange={this.handleChange.bind(this)} ></textarea>
          </div>
          <button className="Contact__submit" type="submit">Send</button>
        </form>
      </div>
    );
  }
}
