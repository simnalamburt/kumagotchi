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
    this.state = {};

    setTimeout(_ => {
      this.setState({ focus: 2 });

      setTimeout(_ => {
        this.setState({ active: true });

        setTimeout(_ => {
          this.setState({ focus: null, msg: true });
        }, 3000);
      }, 1000);
    }, 8000);
  }

  onFocus(focus) { return _ => { this.setState({ focus }); }; }
  onBlur()  { return _ => { this.setState({ focus: 2 }); }; }

  render() {
    return <div id="main">
      <img src="res/bear-lenny.png"/>
      { this.state.msg ?
        <div>
          <img className="layer" src="res/bar-12.png"/>
          <img className="layer" src="res/balloon.png"/>
          <img className="layer" src="res/balloon-lenny.png"/>
          <div className="box">
            <span>울 액희~<br/>기분이 조왓구나?ㅎ</span>
          </div>
        </div> : null
      }
      {
        this.state.focus == null ? null : <img className="layer"
          src={`res/button${this.state.focus}-active.png`}/>
      }
      { this.state.focus !== 2 ? null :
        <img className="option" src={this.state.active ? 'res/option-2.png' : 'res/option-1.png'}/>
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
