import './style.css';
import { renderProjects } from './sidebarCat.js';
import { allTodos } from './todoGenerator.js';
import { allProjects } from './projectGenerator';
import './alltodosDOM.js';




//Get todos and projects from localStorage
allTodos.retrieveTodoStorage();
allProjects.retrieveProjectStorage();

//Unlike the Add or Category options, the projects are dynamic and need to be uniquely set up when page loads
renderProjects();

//Since the forms don't submit, prevent forms from refreshing the page with the Enter key
document.querySelectorAll('form').forEach(form => {addEventListener('submit', e => e.preventDefault())})











