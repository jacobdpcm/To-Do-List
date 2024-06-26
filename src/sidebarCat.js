import sun from './images/sun.svg';
import calender from './images/calender.svg';
import party from './images/party.svg';
import list from './images/list.svg';
import plus from './images/plus.svg';
import { allTodos } from './todoGenerator.js';
import { renderAllTodos } from './alltodosDOM.js';
import { allProjects } from './projectGenerator.js';

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

    //Means to remove projects
    const xProjectButton = document.createElement('div');
    xProjectButton.classList.add('xProjectButton');
    xProjectButton.textContent = 'X';
    projectContainer.appendChild(xProjectButton);
    xProjectButton.addEventListener('click', () => {
        if (confirm('Are you sure you want to delete the entire project and all to-dos within?')){
            allProjects.setCurrentProjectName(project);
            allProjects.generateCurrentProject(allTodos.getArrayTodos())
            allProjects.getCurrentProject().forEach(todoDeleted => {
                allTodos.removeTodo(todoDeleted);
            })
            allProjects.removeProject(project);
            renderProjects();
            const content = document.querySelector('.content');
            content.innerHTML = '';
        }
    })
   
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
        const form = document.querySelector('.taskForm');
        form.reset();
        renderAllTodos(allTodos.getArrayTodos());
    })

    const addProject = document.querySelector('.addProjectButton');
    addProject.addEventListener('click', () => {
        const projectField = document.querySelector('#projectName');
        if(projectField.value === 'None' || allProjects.getProjects().includes(projectField.value)){
            alert('Please use a different project name')
        } else {
            allProjects.addProject(projectField.value);
            //Rendering the Projects in the sidebar goes here
            renderProjects();
            const form = document.querySelector('.projectForm');
            form.reset();
            toggleOverlay('.overlayProject');
        }
    })
}

function renderAddTasks(){
    createCategory(document.querySelector('.addTasks'), 'addTodo', 'Add To-Do', plus);
    const buttonTodo = document.querySelector('.addTodo');
    buttonTodo.addEventListener('click', () => {
        //need to generate the dropdown of the current selection of projects
        const projectInputs = document.querySelector('#project');
        projectInputs.innerHTML = '';
        const none = document.createElement('option');
        none.value = 'None'
        none.textContent = 'None'
        projectInputs.appendChild(none);
        allProjects.getProjects().forEach(project => {
            const option = document.createElement('option');
            option.value = project;
            option.textContent = project;
            projectInputs.appendChild(option);
        })
        toggleOverlay('.overlay')
    });

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
    const todayButton = document.querySelector('.today');
    todayButton.addEventListener('click', () => {
        const today = new Date();
        let year = today.getFullYear().toString();
        let day = today.getDate().toString()
        if(day.length === 1){day = 0 + day}
        let month = (today.getMonth() + 1).toString()
        if(month.length === 1){month = 0 + month}
        console.log(year + '-' + month + '-' + day)
        renderAllTodos(allTodos.getArrayTodos().filter((todo) => {
            console.log(todo.todoDueDate);
            return year + '-' + month + '-' + day === todo.todoDueDate.toString();
        }))
    })

    createCategory(document.querySelector('.categories'), 'month', 'This Month', calender);
    const monthButton = document.querySelector('.month');
    monthButton.addEventListener('click', () => {
        const today = new Date();
        let year = today.getFullYear().toString();
        let day = today.getDate().toString()
        if(day.length === 1){day = 0 + day}
        let month = (today.getMonth() + 1).toString()
        if(month.length === 1){month = 0 + month}
        renderAllTodos(allTodos.getArrayTodos().filter((todo) => {
            return year + '-' + month === todo.todoDueDate.toString().slice(0, 7)
        }))
    })

    createCategory(document.querySelector('.categories'), 'important', 'Important', party);
    const important = document.querySelector('.important');
    important.addEventListener('click', () => {
        renderAllTodos(allTodos.getArrayTodos().filter((todo) => {return todo.todoPriority === 'High'}))
    })
}

renderAddTasks();
categorySetup();

export { renderProjects }


