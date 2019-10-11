import React from 'react';
import dash from '../../assets/images/dash.svg';
import './Subscribe.css';

function Subscribe() {
  return (
    <div className="Subscribe">
      <div className="container">
        <div className="Subscribe_content">
          <div className="Subscribe-content-dash">
            <img src={dash} className="subscribe_dash" alt="dash" />
          </div>

          <div className="Subscribe_text">
            <h1>Subscribe to Portail Newsletter</h1>
            <p>No spam, ever. Your email address will only ever be user for Portail News and you can easily unsubscribe with a single click any time.</p>
          </div>

          <div className="Subscribe_form">
            <form action="">
              <input type="text" name="country" placeholder="your email address" readonly/>
              <button className="button"> SUBSCRIBE </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Subscribe;
