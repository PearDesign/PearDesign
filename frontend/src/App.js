import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { Nav } from './components/Nav';
import { Home } from './components/Home';
import { Work } from './components/Work';
import { Project } from './components/Project';
import { Contact } from './components/Contact';
import { FooterNav } from './components/FooterNav';
import { Footer } from './components/Footer';

class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Nav />
          <Switch>
          <div className="Page">
            <Route exact path="/" component={ Home }/>
            <Route exact path="/work" component={ Work }/>
            <Route path="/contact" component={ Contact }/>
            <Route path="/work/:project_name" component={ Project }/>
          </div>
          </Switch>
          <FooterNav />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
