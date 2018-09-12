import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { Nav } from './components/Nav';
import { PageHome } from './components/PageHome';
import { PageWork } from './components/PageWork';
import { PageContact } from './components/PageContact';
import { PageProject } from './components/PageProject';
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
            <Route exact path="/" component={ PageHome }/>
            <Route path="/work" component={ PageWork }/>
            <Route path="/contact" component={ PageContact }/>
            <Route exact path="/project/:project_name/" component={ PageProject }/>
          </Switch>
          <FooterNav />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
