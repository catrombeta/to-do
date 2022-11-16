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


// ------------- TODO LIST TWO --------------- 

const inputListTwo = document.querySelector('.input-list-two');
const btnListTwo = document.querySelector('.btn-list-two');
const addListTodoTwo = document.querySelector('#add-list-todo-two');

function createLiSchool() {
    const li = document.createElement('li');
    return li;
}

// ADD TASK TO UL BODY

function createTaskSchool(textInput) {
    const li = createLiSchool();
    li.innerText = textInput;
    addListTodoTwo.appendChild(li);
    clearTaskSchool(li);
    clearInputSchool();
    saveTaskSchool();
}

// CLEAR INPUT AFTER ADD TASK

function clearInputSchool() {
    inputListTwo.value = '';
    inputListTwo.focus();
}

// BTN CLEAR TASK

btnListTwo.addEventListener('click', () => {
    if (!inputListTwo.value) return;
    createTaskSchool(inputListTwo.value);
});

// CLICK ENTER TO ADD TASK

inputListTwo.addEventListener('keypress', e => {
    if (e.keyCode === 13) {
        if (!inputListTwo.value) return;
        createTaskSchool(inputListTwo.value);
    }
});

// CLEAR BUTTON

function clearTaskSchool(li) {
    li.innerText += ' ';
    const btnListTwo = document.createElement('button');
    btnListTwo.innerText = 'Clear Task';
    btnListTwo.setAttribute('class', 'btnClearTaskTwo');
    btnListTwo.setAttribute('title', 'Clear task');
    li.appendChild(btnListTwo);
}

// REMOVE TASK BUTTON

document.addEventListener('click', (e) => {
    const el = e.target;

    if (el.classList.contains('btnClearTaskTwo')) {
        el.parentElement.remove();
        saveTaskSchool();
    }
});

// SAVE TASKS IN LOCAL STORAGE

function saveTaskSchool() {
    const liTasks = addListTodoTwo.querySelectorAll('li');
    const listTodoTasksSchool = [];
    
    for (let task of liTasks) {
        let taskText = task.innerText;
        taskText = taskText.replace('Clear Task', '').trim();
        listTodoTasksSchool.push(taskText);
    }
    
    const tasksJSON = JSON.stringify(listTodoTasksSchool);
    localStorage.setItem('addListTodoTwo', tasksJSON);
}

function addSaveTasks() {
    const addListTodoOne = localStorage.getItem('addListTodoOne');
    const listTodoTasks = JSON.parse(addListTodoOne);

    for (let task of listTodoTasks) {
        createTask(task);
    }
}

addSaveTasks();

// SAVE TASKS IN LOCAL STORAGE (SCHOOL)

function addSaveTasksSchool() {
    const addListTodoTwo = localStorage.getItem('addListTodoTwo');
    const listTodoTasksSchool = JSON.parse(addListTodoTwo);

    for (let task of listTodoTasksSchool) {
        createTaskSchool(task);
    }
}

addSaveTasksSchool();
