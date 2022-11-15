// ------------- TODO LIST ONE --------------- 

const inputListOne = document.querySelector('.input-list-one');
const btnListOne = document.querySelector('.btn-list-one');
const addListTodoOne = document.querySelector('#add-list-todo-one');

function createLi() {
    const li = document.createElement('li');
    return li;
}

// ADD TASK TO UL BODY

function createTask(textInput) {
    const li = createLi();
    li.innerText = textInput;
    addListTodoOne.appendChild(li);
    clearTask(li);
    clearInput();
    saveTask();
}

// CLEAR INPUT AFTER ADD TASK

function clearInput() {
    inputListOne.value = '';
    inputListOne.focus();
}

// BTN CLEAR TASK

btnListOne.addEventListener('click', () => {
    if (!inputListOne.value) return;
    createTask(inputListOne.value);
});

// CLICK ENTER TO ADD TASK

inputListOne.addEventListener('keypress', e => {
    if (e.keyCode === 13) {
        if (!inputListOne.value) return;
        createTask(inputListOne.value);
    }
});

// CLEAR BUTTON

function clearTask(li) {
    li.innerText += ' ';
    const btnListOne = document.createElement('button');
    btnListOne.innerText = 'Clear Task';
    btnListOne.setAttribute('class', 'btnClearTaskOne');
    btnListOne.setAttribute('title', 'Clear task');
    li.appendChild(btnListOne);
}

// REMOVE TASK BUTTON

document.addEventListener('click', (e) => {
    const el = e.target;

    if (el.classList.contains('btnClearTaskOne')) {
        el.parentElement.remove();
        saveTask();
    }
});

// SAVE TASKS IN LOCAL STORAGE

function saveTask() {
    const liTasks = addListTodoOne.querySelectorAll('li');
    const listTodoTasks = [];

    for (let task of liTasks) {
        let taskText = task.innerText;
        taskText = taskText.replace('Clear Task', '').trim();
        listTodoTasks.push(taskText);
    }

    const tasksJSON = JSON.stringify(listTodoTasks);
    localStorage.setItem('addListTodoOne', tasksJSON);
}

function addSaveTasks() {
    const addListTodoOne = localStorage.getItem('addListTodoOne');
    const listTodoTasks = JSON.parse(addListTodoOne);

    for (let task of listTodoTasks) {
        createTask(task);
    }
}

addSaveTasks();

// ------------- TODO LIST TWO --------------- 

