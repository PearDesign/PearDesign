import React, { Component } from 'react';
import logo from './logo.svg';
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
