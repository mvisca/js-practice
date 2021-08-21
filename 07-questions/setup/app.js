//using selectors inside the element
// traversing the dom

const questions = document.querySelectorAll('.question')

function updateQuestion(e) {
  questions.forEach((ee) => { if (ee !== e) { ee.classList.remove('show-text')}});
  e.currentTarget.parentElement.parentElement.classList.toggle('show-text');
}

questions.forEach((q) => q.querySelector('.question-btn')
                          .addEventListener('click', updateQuestion));



// const btns = document.querySelectorAll('.question-btn');

// // function questionClick(e) {
// //     console.log(e.parentElement);
// // }

// // questions.forEach((q) => q.addEventListener('click', questionClick));

// function showText(e) {
//   questions.forEach((q) => q.classList.remove('show-text'));
//   e.currentTarget.parentElement.parentElement.classList.add('show-text');
// }

// btns.forEach((b) =>  b.addEventListener('click', showText));
