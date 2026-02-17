const { app, BrowserWindow } = require('electron')

const CONTENT_WIDTH = 1280;
const CONTENT_HEIGHT = 720;

let mainWindow;
const createWindow = () =>
{
    mainWindow = new BrowserWindow({
        frame: true,
        resizable: false,
        backgroundColor: "#1d274f",
    })
    mainWindow.setMenuBarVisibility(false);
    mainWindow.loadFile('index.html')
    // ← Force la taille du contenu APRÈS le chargement
    mainWindow.webContents.on('did-finish-load', () =>
    {
        mainWindow.setContentSize(CONTENT_WIDTH + 150, CONTENT_HEIGHT);
    });
}

// Demarrage de l'appliation
app.whenReady().then(() =>
{
    createWindow();
    //mainWindow.webContents.openDevTools();
});
app.disableHardwareAcceleration();
