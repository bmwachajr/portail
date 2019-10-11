import React from 'react';
import heroImage from '../../assets/images/hero-image.svg';
import './WalkThrough.css';

function WalkThrough() {
  return (
    <div className="walk-through">
      <div className="container">
        <div className="walk-through_content">

          <div className="walk-through_hero_image">
            <img src={heroImage} className="App_logo_img" alt="logo" />
          </div>


          <div className="walk-through_text" >
            <h1>Simple interface</h1>
            <p>We have a simple interface to manage your recording from, with simple start and stop recording. With a simple interface for configuring the application’s settings</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default WalkThrough;
