const React = require('react');
const { render } = require('react-dom');
const { Router, Route, Link, hashHistory } = require('react-router');
const { screen } = require('./option.json');

// Change inner size of the window to fit screen
window.resizeTo(
  window.outerWidth  - window.innerWidth  + screen.width  * screen.zoom,
  window.outerHeight - window.innerHeight + screen.height * screen.zoom
);

const Front = _ => (
  <div id="front">
    <Link to="/main"><img className="blink" src="res/start_blink.png"/></Link>
  </div>
);

const Main = _ => (
  <div id="main">
    <img src="res/bear-basic.png"/>
    <div style={{position: 'absolute', left: 0, top: 0}}>
    </div>
    { [41, 134, 223, 305].map((left, i) =>
      <div key={i} tabIndex="0"
        className="button" style={{left}}
        onFocus={_ => console.log(`Focusing ${i}`)}
        onBlur={_ => console.log(`Leaving ${i}`)}
      />
    ) }
  </div>
);

const Menu = i => _ => (
  <img src={`res/button${i}-active.png`}/>
);

render(
  <Router history={hashHistory}>
    <Route path="/" component={Front}/>
    <Route path="/main" component={Main}/>
  </Router>,
  document.getElementById('target')
);
