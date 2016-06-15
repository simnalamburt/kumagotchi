const React = require('react');
const { render } = require('react-dom');

render(
  <div id="screen">
    <img className="blink" src="res/2.png"/>
  </div>,
  document.getElementById('target')
);
