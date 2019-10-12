import React from '../../../node_modules/react';
import Header from '../Header';
import Footer from '../Footer';
import Subscribe from '../Subscribe';
import WalkThrough from '../WalkThrough';
import logo from '../../assets/images/logo.svg'
import './App.css';
import Value from '../Value';
import ValueItem from '../Value/Value_item';

const App = props => (
  <div className="App">
    <div className="container">
      <div className="App_logo">
        <img src={logo} className="App_logo_img" alt="logo" />
        <h1 className="App_logo_text">Portail</h1>
      </div>
    </div>

    <Header />

    <Value />

    <WalkThrough />

    <Subscribe />

    <Footer />

  </div>
);

export default App;
