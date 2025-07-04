const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // Replace this project name based on your actual build folder name
  const appPath = path.join(__dirname, 'dist', 'angular-electron-app', 'index.html');
  win.loadFile(appPath);

  // Optional: open DevTools to debug if blank screen
  // win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
