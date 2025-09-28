const saved = JSON.parse(localStorage.getItem('todos')) || [];

let todoList = saved.length ? saved : [{
    name: 'make dinner',
    dueDate: '2025-9-24'
}, {
    name: 'wash disher',
    dueDate: '2025-9-24'
}];

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todoList));
}

function renderTodoList () {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const { name, dueDate } = todoList[i];
        // const name = todoObject.name;
        // const dueDate = todoObject.dueDate;
        
        // const { name, dueDate } = todoObject;
        
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
        todoList.splice(${i}, 1);
        saveTodos();
        renderTodoList();
        
        " class="delete-todo-button">Delete</button>`;
        todoListHTML += html;
    }

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');

    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;
    
    if(!name) return;

    todoList.push({
        //name: name,
        //dueDate: dueDate
         //name: name,
        //dueDate: dueDate
        name,
        dueDate
    }
    );
    saveTodos();

    inputElement.value = '';
    dateInputElement.value = '';
    renderTodoList();
}

renderTodoList();