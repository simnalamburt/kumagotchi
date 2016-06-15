const { app, BrowserWindow } = require('electron');
const { screen } = require('./option.json');

let win;
app.once('ready', _ => {
  const width  = (screen.width  * screen.zoom +  0)|0;
  const height = (screen.height * screen.zoom + 22)|0;

  win = new BrowserWindow({ width, height });
  win.loadURL(`file://${__dirname}/index.html`);
});

app.on('window-all-closed', app.quit);
