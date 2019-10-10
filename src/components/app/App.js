import React from '../../../node_modules/react';
import Header from '../Header';
import Footer from '../Footer';
import logo from '../../assets/images/logo.svg'
import './App.css';

const App = props => (
  <div className="container">
    <div className="App_logo">
      <img src={logo} className="App_logo_img" alt="logo" />
      <h1 className="App_logo_text">Portail</h1>
    </div>
    
    <Header />

    <Footer />

  </div>
);

export default App;
