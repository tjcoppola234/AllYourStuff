// Your web app's Firebase configuration
// Initialize Firebase
import { getFirestore, getDocs, addDoc, Timestamp, collection } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

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
async function collPicked() {
  hideAddItemBox();
  document.getElementById('collectionItems').innerHTML = '';
  if (document.getElementById('collectionSelect').value === 'Soda') {
    console.log('inFunciton');
    const receivedDocs = await getDocs(collection(fbDB, 'Soda'));
    receivedDocs.forEach((recDoc) => {
      document.getElementById('collectionItems').innerHTML +=
          `<div>
           ${recDoc.get('name')}: Added on ${recDoc.get('dateAdded').toDate()}
           </div>`;
      console.log('recieved a doc');
    });
    // document.getElementById('collectionItems').innerHTML +=
    //     `<img src="../resources/assets/logo.png">
    //      <img src="../resources/assets/logo.png">`;
  }
  document.getElementById('addItemButton').removeAttribute('disabled');
}

async function addItem() {
  console.log('hello');
  const addItemForm = document.getElementById('addItem');
  let allFieldsFull = true;
  for (const element of addItemForm.elements) {
    console.log(element);
    if (element.type !== 'button' && element.type !== 'reset' && element.value === '') {
      allFieldsFull = false;
    }
    console.log(allFieldsFull);
  }
  if (allFieldsFull) {
    const addedDoc = await addDoc(collection(fbDB, document.getElementById('collectionSelect').value), {
      name: addItemForm.elements.itemName.value,
      dateAdded: Timestamp.fromDate(new Date(Date.now())).toDate(),
    });
    console.log(`Document added: ${addedDoc.id}`);
  } else {
    console.log('all fields not filled');
  }
}
