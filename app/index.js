const { app, BrowserWindow } = require('electron');

let win;
app.once('ready', _ => {
  win = new BrowserWindow({ width: 404, height: 695 });
  win.loadURL(`file://${__dirname}/index.html`);
});

app.on('window-all-closed', app.quit);
