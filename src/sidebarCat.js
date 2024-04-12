import sun from './images/sun.svg';
import calender from './images/calender.svg';
import party from './images/party.svg';
import list from './images/list.svg';
import plus from './images/plus.svg';

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

function renderAddTasks(){
    createCategory(document.querySelector('.addTasks'), 'addTodo', 'Add To-Do', plus);
    createCategory(document.querySelector('.addTasks'), 'addProject', 'Add Project', plus);
}

function categorySetup(){
    createCategory(document.querySelector('.categories'), 'today', 'Today', sun);
    createCategory(document.querySelector('.categories'), 'all', 'All To-Dos', list);
    createCategory(document.querySelector('.categories'), 'week', 'This Week', calender);
    createCategory(document.querySelector('.categories'), 'special', 'Special Events', party);
}

export { renderAddTasks, categorySetup };