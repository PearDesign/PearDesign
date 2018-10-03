import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { Nav } from './components/Nav';
import { Home } from './components/Home';
import { Work } from './components/Work';
import { Project } from './components/Project';
import { Contact } from './components/Contact';
import Footer from './components/Footer';

class App extends Component {
  render() {

    return (
      <BrowserRouter onUpdate={() => window.scrollTo(0,0)}>
        <div className="App">
          <Header />
          <Nav />
          <div className="Page">
            <Switch>
              <Route exact path="/" component={ Home }/>
              <Route exact path="/work" component={ Work }/>
              <Route path="/contact" component={ Contact }/>
              <Route path="/work/:project_name" component={ Project }/>
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
