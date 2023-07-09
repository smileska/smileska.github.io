const menu = document.querySelector('#mobilno');
const menuLinks = document.querySelector('.navigacija-meni');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});
let form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  return false;
});