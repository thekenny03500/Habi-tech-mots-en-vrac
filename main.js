const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path');
const EWindowSize = require('./model/windowSize');

const DEFAULT_SIZE = EWindowSize[ 0 ];

let mainWindow;
const createWindow = () =>
{
    mainWindow = new BrowserWindow({
        frame: true,
        resizable: false,
        backgroundColor: "#6270a4",
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            spellcheck: false,
            backgroundThrottling: false,
            enableRemoteModule: false,
            preload: path.join(__dirname, 'preload.js'),
        }
    })
    mainWindow.setMenuBarVisibility(false);
    mainWindow.loadFile('index.html')
    // Force la taille du contenu APRÈS le chargement
    mainWindow.webContents.on('did-finish-load', () =>
    {
        mainWindow.setContentSize(DEFAULT_SIZE.width + 150, DEFAULT_SIZE.height);
    });
    if (!app.isPackaged) {
        mainWindow.webContents.openDevTools();
    }
}

// ---- Ipc ---- //
ipcMain.on('resize-window', (_, windowSize) =>
{
    if (mainWindow) {
        const choise = EWindowSize[ windowSize ];
        if (choise) {
            mainWindow.setContentSize(choise.width + 150, choise.height);
            mainWindow.center();
        }
    }
});

// ---- Demarrage de l'appliation ---- //
app.whenReady().then(createWindow);
app.disableHardwareAcceleration();
