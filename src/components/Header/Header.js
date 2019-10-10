import React from 'react';
import logo from '../../assets/images/logo.svg';
import heroImage from '../../assets/images/hero-image.svg';
import './Header.css';

function Header() {
  return (
    <div className="Header">
      <div className="container">
      <header className="Header_content">
        <div className="Header_text">
          <h1>Screen recording should be easy</h1>
          <p>Portail is a beautiful, flexible screen recording app built with the user in mind. This is our public apha shoot some feeedback our way</p>

          <div className="Header_form">
            <form action="">
              <input type="text" name="country" value="> brew install portail@alpha" readonly/>
              <button className="button"> Copy to clipboard </button>
            </form>
          </div>
        </div>

        <div className="Header_hero_image">
          <img src={heroImage} className="App_logo_img" alt="logo" />
        </div>

      </header>
      </div>
    </div>
  );
}

export default Header;
