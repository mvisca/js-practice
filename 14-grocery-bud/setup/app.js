// ****** SELECT ITEMS **********
const form = document.querySelector('.grocery-form');
const alert = document.querySelector('.alert');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');
// edit option
let editElement;
let editFlag = false;
let editID = '';

// ****** EVENT LISTENERS **********

// submit form
form.addEventListener('submit', addItem);
// clear items
clearBtn.addEventListener('click', clearList);
// display items on load
// window.addEventListener('DOMContentLoaded', setupItems);

// ****** FUNCTIONS **********

function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();

  if(value && !editFlag){
    const element = document.createElement('article'); // Create element
    element.classList.add('grocery-item'); // Add class to element
    const attr = document.createAttribute('data-id'); // Create attribute
    attr.value = id; // Se the value of the attribute
    element.setAttributeNode(attr); // Set the element attribute
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

      // Select and add event listeners to item buttons
    const deleteBtn = element.querySelector('.delete-btn');
    const editBtn = element.querySelector('.edit-btn');
    deleteBtn.addEventListener('click', deleteItem);
    editBtn.addEventListener('click', editItem);

      // Append child
    list.appendChild(element);
    displayAlert('Item added', 'success');
    container.classList.add('show-container');
    // Add to local storage
    addToLocalStorage(id, value);
    // Set back to default
    setBackToDefault();
  } else if(!value && editFlag){
    displayAlert('Item updated', 'success');
  }
  else {
    displayAlert('No input', 'danger');
  }
};

function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const itemValue = element.children[0].textContent;
  const itemID = element.dataset.id;
  list.removeChild(element);
  if(list.children.length === 0){
    container.classList.remove('show-container');
  }
  displayAlert(`${itemValue} removed`, 'danger');
  setBackToDefault();
  // remove from local storage
  // removeFromLocalStorage(itemID);
}

function editItem() {
  console.log('edit');
}

function clearList() {
  const items = document.querySelectorAll('.grocery-item');

  if(items.length > 0){
    items.forEach((item) => {
      list.removeChild(item);
    });
  }
  container.classList.remove('show-container');
  displayAlert('List cleared', 'success');
  setBackToDefault();
  // localStorage.removeItem('list');
}

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
  grocery.value = '';
  editFlag = false;
  editID = '';
  submitBtn.textContent = 'submit';
}

// ****** LOCAL STORAGE **********
// Add to local storage

function removeFromLocalStorage(id){

}
function addToLocalStorage(id, value){
}

// ****** SETUP ITEMS **********
