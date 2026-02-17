const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    resizeWindow: (selectedKey) =>
    {
        ipcRenderer.send('resize-window', selectedKey);
    },
});