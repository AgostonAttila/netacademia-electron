const { app, BrowserWindow } = require('electron');

const { setMainMenu } = require('./menu');

// require('electron-reload')(__dirname);

let win;

app.on('ready', () => {
    win = new BrowserWindow();
    win.loadURL(`file://${__dirname}/index.html`);
        
    win.webContents.openDevTools();

    setMainMenu(win);
});