const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 760,
    height: 900,
    autoHideMenuBar: true,
    title: "Daily Schedule Tracker"
  });
  win.loadFile(path.join(__dirname, "www", "index.html"));
}

app.whenReady().then(createWindow);
app.on("window-all-closed", () => app.quit());
