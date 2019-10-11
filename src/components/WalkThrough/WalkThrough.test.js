import React from './node_modules/react';
import ReactDOM from './node_modules/react-dom';
import App from './WalkThrough';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WalkThrough />, div);
  ReactDOM.unmountComponentAtNode(div);
});
