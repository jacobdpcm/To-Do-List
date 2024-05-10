import { allTodos } from "./todoGenerator.js";

function generateDOMTodoProperty(propertyClassName, propertyIdentifier, propertyValue, parent){
    const property = document.createElement('div');
    property.classList.add(propertyClassName);
    property.textContent = propertyIdentifier + propertyValue;
    parent.appendChild(property);
}

//For Rendering any specific set of todos
function renderAllTodos(array){
    const content = document.querySelector('.content');
    content.innerHTML = '';

    const wrapper = document.createElement('div');
    wrapper.classList.add('allTodoWrapper');
    content.appendChild(wrapper);

    array.forEach((todo, index) => {
        const todoArea = document.createElement('div');
        todoArea.classList.add('todoArea');
        wrapper.appendChild(todoArea);

        const xButton = document.createElement('div');
        xButton.textContent = 'X';
        xButton.classList.add('xButton');
        todoArea.appendChild(xButton);
        xButton.addEventListener('click', () => {
            //use the index to delete the correct todo from the main allTodos array
            allTodos.removeTodo(todo);
            if(array !== allTodos.getArrayTodos()){
                array.splice(array.indexOf(todo), 1)    
            }
            renderAllTodos(array);
        })

        const titleDescription = document.createElement('div');
        titleDescription.classList.add('titleDescription');
        todoArea.appendChild(titleDescription);

        const details = document.createElement('div');
        details.classList.add('details');
        todoArea.appendChild(details);

        
        generateDOMTodoProperty('todoTitle', '',todo.todoTitle, titleDescription);
        generateDOMTodoProperty('todoDescription', '',todo.todoDescription, titleDescription);
        generateDOMTodoProperty('todoDueDate', 'Due: ',todo.todoDueDate, details);
        generateDOMTodoProperty('todoPriority', 'Priority: ',todo.todoPriority, details);
        generateDOMTodoProperty('todoProject', 'Project: ',todo.todoProject, details);

        //Check or Uncheck a Todo
        if(todo.todoChecked === true){
            todoArea.classList.add('checked');
        } 
        todoArea.addEventListener('click', () => {
            if(todo.todoChecked === false){
                allTodos.updateTodo(allTodos.getArrayTodos().indexOf(todo), null, null, null, null, null, true);
                todoArea.classList.add('checked');
            } else {
                allTodos.updateTodo(allTodos.getArrayTodos().indexOf(todo), null, null, null, null, null, false);
                todoArea.classList.remove('checked');
            }

        })

    });
}



export { renderAllTodos }