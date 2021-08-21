const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');


function toggleFunc() {
  sidebar.classList.toggle('show-sidebar');
}

function closeFunc() {
  sidebar.classList.remove('show-sidebar');
}

toggleBtn.addEventListener('click', toggleFunc);
closeBtn.addEventListener('click', closeFunc);
