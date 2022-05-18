import { app, BrowserWindow } from 'electron';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, Timestamp } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCuS4xjIe7A5fc-qTPmg8tLEQTcXprpgJE',
  authDomain: 'allyourstuff-4ecb4.firebaseapp.com',
  projectId: 'allyourstuff-4ecb4',
  storageBucket: 'allyourstuff-4ecb4.appspot.com',
  messagingSenderId: '304483762295',
  appId: '1:304483762295:web:28f85f4df1a9292f298672',
};
// Initialize Firebase
const fbApp = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(fbApp);

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

const createWindow = async () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/index.html`);

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

  const querySnapshot = await getDocs(collection(db, 'Soda'));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.get('dateAdded').toDate()}`);
    console.log(Timestamp.fromDate(new Date(Date.now())).toDate());
  });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});
