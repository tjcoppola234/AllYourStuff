// eslint-disable-next-line no-unused-vars
function sodaClicked() {
    // eslint-disable-next-line no-undef
  document.getElementById('theHead').textContent = 'soda';
    // eslint-disable-next-line no-undef
  if (document.getElementById('pics').style.display === 'none') {
      // eslint-disable-next-line no-undef
    document.getElementById('pics').style.display = '';
  } else {
      // eslint-disable-next-line no-undef
    document.getElementById('pics').style.display = 'none';
  }
}
