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

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { focus: null };
  }

  onFocus(i) { return _ => { this.setState({ focus: i }); }; }
  onBlur(i)  { return _ => { this.setState({ focus: null }); }; }

  render() {
    return <div id="main">
      <img src="res/bear-basic.png"/>
      <img className="layer" src="res/balloon.png"/>
      <img className="layer" src="res/balloon-icon.png"/>
      <div className="box">
        <span>헤헤~ 기분좋아~</span>
      </div>
      {
        this.state.focus == null ? null : <img className="layer"
          src={`res/button${this.state.focus}-active.png`}/>
      }
      { [41, 134, 223, 305].map((left, i) =>
        <div key={i} tabIndex="0"
          className="button" style={{left}}
          onFocus={this.onFocus(i)} onBlur={this.onBlur(i)}
        />
      ) }
    </div>;
  }
}

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
