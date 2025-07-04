const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true
    }
  });

  // IMPORTANT: change folder name if your Angular project is named differently
  const indexPath = path.join(__dirname, 'dist', 'angular-electron-app', 'index.html');
  console.log('Loading Angular from:', indexPath);
  
  win.loadFile(indexPath);  // <-- Loads Angular build output

  // win.webContents.openDevTools(); // Uncomment to see devtools if blank screen
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
