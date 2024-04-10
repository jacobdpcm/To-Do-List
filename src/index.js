import './style.css';
import { categorySetup } from './sidebarCat.js';
import { newTodo, allTodos } from './todoGenerator.js';

categorySetup();
const groceries = newTodo('Groceries', 'get them groceries', 'Today', 'Important', 'Checked');




console.log('test');
console.log(groceries.getTodo());