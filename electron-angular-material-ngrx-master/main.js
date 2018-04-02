const { app, BrowserWindow } = require('electron');

require('electron-reload')(__dirname);

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow();

  mainWindow.loadURL(`file://${__dirname}/dist/index.html`);

  mainWindow.on('closed', () => mainWindow = null)
}

app.on('ready', createWindow);
