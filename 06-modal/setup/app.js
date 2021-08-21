// select modal-btn,modal-overlay,close-btn

const modalOpenBtn = document.querySelector('.modal-btn');
const modalOvelay = document.querySelector('.modal-overlay');
const modalCloseBtn = document.querySelector('.close-btn');

// when user clicks modal-btn add .open-modal to modal-overlay
function modalOpenFunc() {
  modalOvelay.classList.add('open-modal');
}

// when user clicks close-btn remove .open-modal from modal-overlay
function modalCloseFunc() {
  modalOvelay.classList.remove('open-modal');
}

// listen for click events on modal-btn and close-btn
modalOpenBtn.addEventListener('click', modalOpenFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);



