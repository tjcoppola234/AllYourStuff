/**
 * Author: Theo Coppola
 * Date Created: 05/08/2022
 * Date Modified: 05/08/2022
 *
 * Based on template from: https://www.geeksforgeeks.org/introduction-to-electronjs/
 */

const { app, BrowserWindow } = require('electron')

let win

function createWindow () {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        icon: ( './icon.png'),
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('src/index.html')

    win.on('closed', () => {
        win = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})