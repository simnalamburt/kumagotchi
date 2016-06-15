const React = require('react');
const { render } = require('react-dom');
const { Router, Route, Link, hashHistory } = require('react-router');

const Front = _ => (
  <div id="front">
    <Link to="/main"><img className="blink" src="res/2.png"/></Link>
  </div>
);

const Main = _ => (
  <div id="main">
    <h1>Hello, world!</h1>
    <p>ㅇㅅㅇ)/</p>
  </div>
);

render(
  <Router history={hashHistory}>
    <Route path="/" component={Front}/>
    <Route path="/main" component={Main}/>
  </Router>,
  document.getElementById('target')
);
