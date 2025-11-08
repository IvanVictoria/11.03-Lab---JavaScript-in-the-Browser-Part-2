window.addEventListener('DOMContentLoaded', domLoaded);

/**
 * Once DOM loads function sets up event listeners
 */
function domLoaded() {
    const addBtn = document.getElementById('addBtn');
    const taskInput = document.getElementById('taskInput');

    addBtn.addEventListener("click", addBtnClick);
    taskInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            addBtnClick();
        }
    });
}

/**
 * Function for the add button click, enter keypress and
 * adds task tests
 */
function addBtnClick() {
    const taskInput = document.getElementById('taskInput');
    let newTaskText = taskInput.value;
    if (newTaskText.trim() !== '') {
        addTask(newTaskText.trim());
        taskInput.value = '';
    }
    taskInput.focus();
}

/**
 * Creates and appends new lask list items
 * @param {string} newTaskText the text for the new task
 */
function addTask(newTaskText) {
    const li = document.createElement('li');
    li.innerHTML = `<span class="task-text">${newTaskText}</span><button class="done-btn">&#10006;</button>`;
    const ol = document.getElementById('taskList');
    ol.appendChild(li);
    const doneButtons = document.querySelectorAll('.done-btn');
    const lastButton = doneButtons[doneButtons.length - 1];
    lastButton.addEventListener('click', removeTask);
}

/**
 * Click event for the done button
 * also removes the task from the list
 * @param {Event} event The click event object
 */
function removeTask(event) {
    const liToRemove = event.target.parentNode;
    const ol = liToRemove.parentNode;
    ol.removeChild(liToRemove);
}