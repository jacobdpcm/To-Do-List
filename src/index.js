import './style.css';
import { renderAddTasks, categorySetup } from './sidebarCat.js';
import { allTodos } from './todoGenerator.js';
import { renderAllTodos } from './alltodosDOM.js';

function clearContent(){
    const content = document.querySelector('.content');
    content.innerHTML = '';
}

function addButtonSetup(){
    const add = document.querySelector('.addButton');
    add.addEventListener('click', () => {
        const title = document.querySelector('#title');
        const description = document.querySelector('#description');
        const dueDate = document.querySelector('#duedate');
        const priority = document.querySelector('#priority');
        const project = document.querySelector('#project');

        allTodos.addTodo(title.value, description.value, dueDate.value, priority.value, project.value)
        clearContent();
        renderAllTodos(tasks.getArrayTodos());
    })
};

addButtonSetup();
renderAddTasks();
categorySetup();

//const tasks = allTodos;
allTodos.addTodo('Groceries', 'get them groceries', 'Today', 'Important', 'none');
allTodos.addTodo('Groceries', 'get them groceries', 'Today', 'Important', 'none');


console.log(allTodos.getArrayTodos());


renderAllTodos(allTodos.getArrayTodos());



console.log('test');
