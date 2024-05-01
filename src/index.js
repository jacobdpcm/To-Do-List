import './style.css';
import { renderProjects } from './sidebarCat.js';
import { allTodos } from './todoGenerator.js';
import { allProjects } from './projectGenerator';
import { renderAllTodos } from './alltodosDOM.js';




//Unlike the Add or Category options, the projects are dynamic and need to be uniquely set up when page loads
renderProjects();



//const tasks = allTodos;
allTodos.addTodo('Pay Taxes', 'allegedly', 'Today', 'Important', 'Stream');
allTodos.addTodo('Groceries', 'get them groceries', 'Today', 'Important', 'Work');
allTodos.addTodo('Pay Taxes', 'allegedly', 'not today', 'Low', 'Stream');
allTodos.addTodo('Groceries', 'get them groceries', 'Today', 'None', 'Work');
allTodos.addTodo('Excercise', 'allegedly', 'not today', 'Important', 'Stream');
allTodos.addTodo('Groceries', 'get the stuff', 'Today', 'Medium', 'Work');
allTodos.addTodo('Groceries', 'get them groceries', 'Today', 'None', 'Vacation');
allTodos.addTodo('Excercise', 'allegedly', 'not today', 'Important', 'Vacation');
allTodos.addTodo('Groceries', 'get the stuff', 'Today', 'Medium', 'Vacation');


console.log(allTodos.getArrayTodos());






console.log('test');
