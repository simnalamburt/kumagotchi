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

const data = {
  '1': {
    hp: 'res/bar-10.png',
    img: 'res/bear-lenny.png',
    text: '이런거 옵하 좀 불캐해;',
  },
  '2': {
    hp: 'res/bar-09.png',
    img: 'res/bear-lenny2.png',
    text: '이런거 옵하 좀 불캐해;',
  },
};

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    setTimeout(_ => {
      this.setState({ msg: 1 });

      setTimeout(_ => {
        this.setState({ msg: 2 });
      }, 1000);
    }, 8000);
  }

  onFocus(focus) { return _ => { this.setState({ focus }); }; }
  onBlur()  { return _ => { this.setState({ focus: null }); }; }

  render() {
    return <div id="main">
      { this.state.msg == null ?
        <img src="res/bear-lenny.png"/> :
        <div>
          <img src={data[this.state.msg].img}/>
          <img className="layer" src={data[this.state.msg].hp}/>
          <img className="layer" src="res/balloon.png"/>
          <img className="layer" src="res/balloon-icon.png"/>
          <div className="box">
            <span>{ data[this.state.msg].text }</span>
          </div>
        </div>
      }
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
