// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class


const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

function toggleMenu() {
  // if (links.classList.contains('show-links')) {
  //   links.classList.remove('show-links');
  //   return;
  // }
  links.classList.toggle('show-links');
}

navToggle.addEventListener('click', toggleMenu);
