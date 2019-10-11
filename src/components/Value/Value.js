import React from 'react';
import dash from '../../assets/images/dash.svg';
import microphone from '../../assets/images/microphone.svg';
import macro from '../../assets/images/macro.svg';
import settings from '../../assets/images/settings.svg';
import startup from '../../assets/images/startup.svg';
import ValueItem from './Value_item';
import './Value.css';

function Value() {
  const startup_content = {
    icon: startup,
    title: "Launch app",
    description: "Launch the portail menu from your system tray"
  }
  
  const macro_content = {
    icon: macro,
    title: "Pick mode",
    description: "Select the recording mode on the portail app "
  }
  
  const settings_content = {
    icon: settings,
    title: "Setup recording",
    description: "Select  the screen and/or are to record from."
  }
  
  const microphone_content = {
    icon: microphone,
    title: "Start recording",
    description: "Start the recording and save the recording to your computer"
  }
  
  return (
    <div className="Value">
      <div className="container">
        <div className="Value_content">
          <div className="Value-content-dash">
            <img src={dash} className="Value_dash" alt="dash" />
          </div>

          <div className="Value_text">
            <h1>It’s simple, we promise</h1>
            <p>To record your screen has never been so simple and free, everything you need in a few simple steps.</p>
          </div>

          <div className="Value_list">
            <div className="value_list_item item_up"><ValueItem content={startup_content}/></div>
            <div className="value_list_item item_down"><ValueItem content={macro_content}/></div>
            <div className="value_list_item item_up"><ValueItem content={settings_content}/></div>
            <div className="value_list_item item_down"><ValueItem content={microphone_content}/></div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Value;
