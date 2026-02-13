const { app, BrowserWindow } = require('electron')

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
})
