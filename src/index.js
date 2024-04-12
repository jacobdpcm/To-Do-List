import './style.css';
import { renderAddTasks, categorySetup } from './sidebarCat.js';
import { allTodos } from './todoGenerator.js';
import { renderAllTodos } from './alltodosDOM.js';
renderAddTasks();
categorySetup();

const tasks = allTodos();
tasks.addTodo('Groceries', 'get them groceries', 'Today', 'Important', 'none');
tasks.addTodo('Groceries', 'get them groceries', 'Today', 'Important', 'none');
tasks.addTodo('Groceries', 'get them groceries', 'Today', 'Important', 'none');
tasks.addTodo('Groceries', 'get them groceries', 'Today', 'Important', 'none');
tasks.addTodo('Groceries', 'get them groceries', 'Today', 'Important', 'none');
tasks.addTodo('Groceries', 'get them groceries', 'Today', 'Important', 'none');
console.log(tasks.getArrayTodos());

renderAllTodos(tasks.getArrayTodos());



console.log('test');
