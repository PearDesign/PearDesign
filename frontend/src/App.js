import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { Page } from './components/Page';
import { FooterNav } from './components/FooterNav';
import { Footer } from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Page />
        <FooterNav />
        <Footer />
      </div>
    );
  }
}

export default App;
