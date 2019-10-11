import React from 'react';
import ReactDOM from 'react-dom';
import ValueItem from './Value_item';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ValueItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
