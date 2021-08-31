// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const inputItem = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-item');
const clearBtn = document.querySelector('.clear-btn');

// edit option

let editElement;
let editFlag = false;
let editID = '';

// ****** EVENT LISTENERS **********

form.addEventListener('submit', addItem);

// ****** FUNCTIONS **********

function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();
  if(value && !editFlag){
    // Create element
    const element = document.createElement('article');
    // Add class to element
    element.classList.add('grocery-item');
    // Create attribute
    const attr = document.createAttribute('data-id');
    // Se the value of the attribute
    attr.value = id;
    // Set the element attribute
    element.setAttributeNode(attr);
    element.innerHTML =
      `<p class="title">${value}</p>
      <div class="btn-container">
        <button type="button" class="edit-btn">
          <i class="fas fa-edit"></i>
        </button>
        <button type="button" class="delete-btn">
          <i class="fas fa-trash"></i>
        </button>
      </div>`;
    // Append child
    list.appendChild(element);
    list.classList.add('show-container');
    displayAlert('Item added', 'success');
    // Add to local storage
    addToLocalStorage(id, value);
    // Set back to default
    setBackToDefault();
    inputItem.value = '';

  } else if(!value && editFlag){

  }
  else {
    displayAlert('No input', 'danger');
  }
};

function displayAlert(text, action){
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  setTimeout(function(){
    alert.textContent = '';
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

// Set back to default
function setBackToDefault(){
  console.log('Reset all');
};

// ****** LOCAL STORAGE **********
// Add to local storage
function addToLocalStorage(id, value){
  console.log({id, value});
};

// ****** SETUP ITEMS **********
