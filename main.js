const { app, BrowserWindow, Tray, Menu, nativeImage, ipcMain } = require('electron')
const path = require('path');


let mainWindow;
const createWindow = () =>
{
    mainWindow = new BrowserWindow({
        frame: true,
        transparent: false,
        alwaysOnTop: true,
        resizable: false,
        focusable: true,
        width: 1280 + 150,
        height: 720 + 52,
    })

    mainWindow.loadFile('index.html')
}

// Demarrage de l'appliation
app.whenReady().then(() =>
{
    createWindow();
    //mainWindow.webContents.openDevTools({ mode: 'detach' });
})
