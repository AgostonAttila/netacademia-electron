const { app, dialog, nativeImage } = require("electron");
const fs = require("fs");
const path = require("path");

module.exports = {
  showDialog,
  savePid
};

function showDialog(win) {
  dialog.showMessageBox(
    win,
    {
      type: "info",
      icon: nativeImage.createFromPath("./logo.png"),
      message: "hello mi",
      detail: "Ide tudunk irni valamiket amivel kommunikalni szeretnenk",
      buttons: ["Szent habakukk micimacko", "Rekurzio"],
      defaultId: 0
    },
    clickedIndex => {
      console.log("a megnyomott gomb id: ", clickedIndex);
    }
  );
}

function savePid(win) {
  dialog.showSaveDialog(
    win,
    {
      defaultPath: path.join(app.getPath("downloads"), "electron-pid.txt")
    },
    fileName => {
      if (fileName) {
        const pid = process.pid;
        fs.writeFile(fileName, pid, "utf-8", err => {
          if (err) {
            dialog.showErrorBox(
              "na valami nagyon nem sikerult jol a filementesnel",
              err
            );
          }
        });
      }
    }
  );
}
