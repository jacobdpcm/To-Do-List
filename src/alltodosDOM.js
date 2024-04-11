import { allTodos } from "./todoGenerator.js";

function generateDOMTodoProperty(propertyClassName, propertyValue, parent){
    const property = document.createElement('div');
    property.classList.add(propertyClassName);
    property.textContent = propertyValue;
    parent.appendChild(property);
}

function renderAllTodos(arrayTodos){
    const content = document.querySelector('.content');
    const wrapper = document.createElement('div');
    wrapper.classList.add('allTodoWrapper');
    content.appendChild(wrapper);

    arrayTodos.forEach(todo => {
        const todoArea = document.createElement('div');
        todoArea.classList.add('todoArea');
        wrapper.appendChild(todoArea);

        const titleDescription = document.createElement('div');
        titleDescription.classList.add('titleDescription');
        todoArea.appendChild(titleDescription);

        const details = document.createElement('div');
        details.classList.add('details');
        todoArea.appendChild(details);

        generateDOMTodoProperty('todoTitle', todo.todoTitle, titleDescription);
        generateDOMTodoProperty('todoDescription', todo.todoDescription, titleDescription);
        generateDOMTodoProperty('todoDueDate', todo.todoDueDate, details);
        generateDOMTodoProperty('todoPriority', todo.todoPriority, details);
        generateDOMTodoProperty('todoProject', todo.todoProject, details);
        generateDOMTodoProperty('todoChecked', todo.todoChecked, details);
    });
}



export { renderAllTodos }