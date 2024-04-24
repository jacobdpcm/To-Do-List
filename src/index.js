import './style.css';
import { renderAddTasks, categorySetup } from './sidebarCat.js';
import { allTodos } from './todoGenerator.js';
import { renderAllTodos } from './alltodosDOM.js';






renderAddTasks();
categorySetup();

//const tasks = allTodos;
allTodos.addTodo('Groceries', 'get them groceries', 'Today', 'Important', 'none');
allTodos.addTodo('Groceries', 'get them groceries', 'Today', 'Important', 'none');


console.log(allTodos.getArrayTodos());


renderAllTodos(allTodos.getArrayTodos());



console.log('test');
