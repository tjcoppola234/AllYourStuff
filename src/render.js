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
function hideAddItemBox() {
  document.getElementById('addItemBox').style.display = 'none';
}

function addItem() {

}
