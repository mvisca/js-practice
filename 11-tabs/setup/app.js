const about = document.querySelector('.about');
const btns = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', updateContent);

function updateContent(e) {
  console.log(e.target.dataset.id);
  const clickedOn = e.target.dataset.id;
  if (clickedOn) {
    btns.forEach((b) => {
      b.classList.remove('active')
    });
    e.target.classList.add('active');

    articles.forEach((a) => {
      a.classList.remove('active');
    });
    document.getElementById(clickedOn).classList.add('active');
  }
}

