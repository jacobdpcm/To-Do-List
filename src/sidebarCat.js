import sun from './images/sun.svg';
import calender from './images/calender.svg';
import party from './images/party.svg';
import list from './images/list.svg';
import plus from './images/plus.svg';
import { allTodos } from './todoGenerator.js';
import { renderAllTodos } from './alltodosDOM.js';
import { generateProject, allProjects } from './projectGenerator.js';

//DOM setup for the sidebar
function createCategory(parent, className, catName, imageName){
    const categories = parent;
    const category = document.createElement('div');
    category.classList.add('cat');
    category.classList.add(className);
    categories.appendChild(category);

    const image = document.createElement('img');
    image.src = imageName;
    category.appendChild(image);

    const name = document.createElement('div');
    name.classList.add('catName');
    name.textContent = catName;
    category.appendChild(name);
}

function toggleOverlay(overlayClass){
    const overlay = document.querySelector(overlayClass);
    overlay.classList.toggle('hidden');
}

function clearContent(){
    const content = document.querySelector('.content');
    content.innerHTML = '';
}

function renderProjects(){
    const projectsDOM = document.querySelector('.projects');
    projectsDOM.innerHTML = '';
    const currentProjects = allProjects.getProjects();
    currentProjects.forEach((project) => {
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project');
    projectContainer.textContent = project;
    projectsDOM.appendChild(projectContainer);
    
    projectContainer.addEventListener('click', () => {
        allProjects.setCurrentProjectName(project);
        allProjects.generateCurrentProject(allTodos.getArrayTodos());
        renderAllTodos(allProjects.getCurrentProject());
    })
})}

function overlayButtonSetup(){
    const cancel = document.querySelector('.cancelButton');
    cancel.addEventListener('click', () => {
        toggleOverlay('.overlay');
        const form = document.querySelector('.taskForm');
        form.reset();
    })
    const cancelProject = document.querySelector('.cancelProjectButton');
    cancelProject.addEventListener('click', () => {
        toggleOverlay('.overlayProject');
        const form = document.querySelector('.projectForm');
        form.reset();
    })

    const add = document.querySelector('.addButton');
    add.addEventListener('click', () => {
        const title = document.querySelector('#title');
        const description = document.querySelector('#description');
        const dueDate = document.querySelector('#duedate');
        const priority = document.querySelector('#priority');
        const project = document.querySelector('#project');

        allTodos.addTodo(title.value, description.value, dueDate.value, priority.value, project.value)
        clearContent();
        renderAllTodos(allTodos.getArrayTodos());
    })

    const addProject = document.querySelector('.addProjectButton');
    addProject.addEventListener('click', () => {
        const projectField = document.querySelector('#projectName');
        allProjects.addProject(projectField.value);
        //Rendering the Projects in the sidebar goes here
        renderProjects();
    })
}

function renderAddTasks(){
    createCategory(document.querySelector('.addTasks'), 'addTodo', 'Add To-Do', plus);
    const buttonTodo = document.querySelector('.addTodo');
    buttonTodo.addEventListener('click', () => {toggleOverlay('.overlay')});

    createCategory(document.querySelector('.addTasks'), 'addProject', 'Add Project', plus);
    const buttonProject = document.querySelector('.addProject');
    buttonProject.addEventListener('click', () => {toggleOverlay('.overlayProject')});

    overlayButtonSetup();
}

function categorySetup(){
    createCategory(document.querySelector('.categories'), 'all', 'All To-Dos', list);
    const allTodosButton = document.querySelector('.all');
    allTodosButton.addEventListener('click', () => {renderAllTodos(allTodos.getArrayTodos())})

    createCategory(document.querySelector('.categories'), 'today', 'Today', sun);
    createCategory(document.querySelector('.categories'), 'week', 'This Week', calender);
    createCategory(document.querySelector('.categories'), 'special', 'Special Events', party);
}

renderAddTasks();
categorySetup();

export { renderProjects }


