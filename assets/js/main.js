const inputList = document.querySelector('.input-list');
const btnList = document.querySelector('.btn-list');
const addListTodo = document.querySelector('#add-list-todo');

function createLi() {
    const li = document.createElement('li');
    return li;
}

// ADD TASK TO UL BODY

function createTask(textInput) {
    const li = createLi();
    li.innerText = textInput;
    addListTodo.appendChild(li);
    clearTask(li);
    clearInput();
    saveTask();
}

// CLEAR INPUT AFTER ADD TASK

function clearInput() {
    inputList.value = '';
    inputList.focus();
}

// BTN CLEAR TASK

btnList.addEventListener('click', () => {
    if (!inputList.value) return;
    createTask(inputList.value);
});

// CLICK ENTER TO ADD TASK

inputList.addEventListener('keypress', e => {
    if (e.keyCode === 13) {
        if (!inputList.value) return;
        createTask(inputList.value);
    }
});

// CLEAR BUTTON

function clearTask(li) {
    li.innerText += ' ';
    const btnList = document.createElement('button');
    btnList.innerText = 'Clear Task';
    btnList.setAttribute('class', 'btnClearTask');
    btnList.setAttribute('title', 'Clear task');
    li.appendChild(btnList);
}

// REMOVE TASK BUTTON

document.addEventListener('click', (e) => {
    const el = e.target;

    if (el.classList.contains('btnClearTask')) {
        el.parentElement.remove();
        saveTask();
    }
});

// SAVE TASKS IN LOCAL STORAGE

function saveTask() {
    const liTasks = addListTodo.querySelectorAll('li');
    const listTodoTasks = [];

    for (let task of liTasks) {
        let taskText = task.innerText;
        taskText = taskText.replace('Clear Task', '').trim();
        listTodoTasks.push(taskText);
    }

    const tasksJSON = JSON.stringify(listTodoTasks);
    localStorage.setItem('addListTodo', tasksJSON);
}

function addSaveTasks() {
    const addListTodo = localStorage.getItem('addListTodo');
    const listTodoTasks = JSON.parse(addListTodo);

    for (let task of listTodoTasks) {
        createTask(task);
    }
}

addSaveTasks();