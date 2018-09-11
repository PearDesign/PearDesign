import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { Nav } from './components/Nav';
import { LogoText } from './components/LogoText'
import { PageHome } from './components/PageHome';
import { PageWork } from './components/PageWork';
import { PageContact } from './components/PageContact';
import { PageProject } from './components/PageProject';
import { FooterNav } from './components/FooterNav';
import { Footer } from './components/Footer';

class App extends Component {
  render() {

    return (
      <Router>
        <div className="App">
          <Header />
          <Nav />
          <Route exact path="/" component={ PageHome }/>
          <Route path="/work" component={ PageWork }/>
          <Route path="/contact" component={ PageContact }/>
          <Route path="/project" component={ PageProject }/>
          <FooterNav />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
