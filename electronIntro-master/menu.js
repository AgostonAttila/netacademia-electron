const { app, Menu } = require("electron");

const { showDialog, savePid } = require('./dialog');

const isWindows = process.platform === 'win32';

module.exports = {
    setMainMenu
};

function setMainMenu(win) {
  const template = [
    {
      label: isWindows ? 'File' : `${app.getName()}`,
      submenu: [
        {
          label: isWindows ? 'Exit' : `Quit ${app.getName()}`,
          accelerator: isWindows ? 'Alt+f4' : 'CmdOrCtrl+Q',
          click() {
            app.quit();
          }
        },
        { type: 'separator' },
        {
          label: 'show info dialog',
          click() {
            showDialog(win);
          }
        },
        {
          label: 'save pid file',
          click() {
            savePid(win);
          }
        }
      ]
    },
    {
      label: 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}
