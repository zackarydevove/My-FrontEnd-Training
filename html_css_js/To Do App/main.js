const form = document.querySelector('form');
const input = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-list');

form.addEventListener('submit', (event) => {
  event.preventDefault();   // prevent from reloading the page when submit
  const todo = input.value; // take the value of the input element
  if (!todo) return;    // if the input is empty, do nothing so return

  const todoElement = document.createElement('li'); // create an <li>
  todoElement.innerHTML = `${todo} <button class="delete-button">X</button>`; // white this inside the <li>
  todoElement.classList.add('todo-item'); // add class="todo-item" to the element
  todoList.appendChild(todoElement);
  input.value = ''; // set input value back to empty string

  const deleteButton = todoElement.querySelector('.delete-button'); // take the button we just had
  deleteButton.addEventListener('click', () => { // listen to it to delete the element if clicked
    todoElement.remove();
  });
});