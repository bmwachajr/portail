import React from 'react';
import './Value_item.css';

function ValueItem(props) {
  return (
    <div className="Value_item">
      <div className="Value_item-img">
        <img src={props.content.icon} className="Value_item-img" alt="value item img" />
      </div>

      <div className="Value_item-text">
        <h1>{props.content.title}</h1>
        <p>{props.content.description}</p>
      </div>
    </div>
  );
}

export default ValueItem;
