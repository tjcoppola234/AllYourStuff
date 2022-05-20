// Your web app's Firebase configuration
// Initialize Firebase
import { initializeApp } from 'firebase/app';
import { getFirestore, addDoc, Timestamp, collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCuS4xjIe7A5fc-qTPmg8tLEQTcXprpgJE',
  authDomain: 'allyourstuff-4ecb4.firebaseapp.com',
  projectId: 'allyourstuff-4ecb4',
  storageBucket: 'allyourstuff-4ecb4.appspot.com',
  messagingSenderId: '304483762295',
  appId: '1:304483762295:web:28f85f4df1a9292f298672',
};
const fbApp = initializeApp(firebaseConfig);
const fbDB = getFirestore(fbApp);

/**
 * Hide the addItem area
 */
function hideAddItemBox() {
  document.getElementById('addItemBox').style.display = 'none';
}

/**
 * Show items in collection when that collection is selected
 */
function collPicked() {
  hideAddItemBox();
  document.getElementById('collectionItems').innerHTML = '';
  if (document.getElementById('collectionSelect').value === 'soda') {
    document.getElementById('collectionItems').innerHTML +=
        `<img src="../resources/assets/logo.png">
         <img src="../resources/assets/logo.png">`;
  }
  document.getElementById('addItemButton').removeAttribute('disabled');
}

async function addItem() {
  // console.log('hello');
  // const addItemForm = document.getElementById('addItem');
  // let allFieldsFull = true;
  // for (const element in addItemForm.elements) {
  //   if (element == null || element === '') {
  //     allFieldsFull = false;
  //   }
  // }// document.getElementById('collectionSelect').value
  // if (allFieldsFull) {
  await addDoc(collection(fbDB, 'Soda'), {
    name: 'sup',
    dateAdded: Timestamp.fromDate(new Date(Date.now())).toDate(),
  }).catch(() => {
    console.log('big err my guy');
  });
  // }
}
