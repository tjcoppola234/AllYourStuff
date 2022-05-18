function submitClicked() {
  if (document.getElementById('collectionSelect').value === 'soda') {
    if (document.getElementById('pics').style.display === 'none') {
      document.getElementById('pics').style.display = '';
    } else {
      document.getElementById('pics').style.display = 'none';
    }
  }
}
