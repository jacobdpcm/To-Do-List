function allTodos(){
    let arrayTodos = [];

    function newTodo(title, description, dueDate, priority, project){
        let todoTitle = title;
        let todoDescription = description;
        let todoDueDate = dueDate;
        let todoPriority = priority;
        let todoProject = project;
        let todoChecked = false;

        return {todoTitle, todoDescription, todoDueDate, todoPriority, todoProject, todoChecked};
    }

    const getArrayTodos = () => {return arrayTodos};
    const addTodo = (title, description, dueDate, priority, project) => {
        const todo = newTodo(title, description, dueDate, priority, project);
        arrayTodos.push(todo);
    };
    const removeTodo = (todo) => {arrayTodos.splice(indexOf(todo, 1))}

    //set value to null if unchanged
    const updateTodo = (oldTodoIndex, newTitle, newDescription, newDate, newPriority, newProject, newChecked) => {
        if(newTitle !== null){arrayTodos[oldTodoIndex].todoTitle = newTitle};
        if(newDescription !== null){arrayTodos[oldTodoIndex].todoDescription = newDescription};
        if(newDate !== null){arrayTodos[oldTodoIndex].todoDueDate = newDate};
        if(newPriority !== null){arrayTodos[oldTodoIndex].todoPriority = newPriority};
        if(newProject !== null){arrayTodos[oldTodoIndex].todoProject = newProject};
        if(newChecked !== null){arrayTodos[oldTodoIndex].todoChecked = newChecked}; 
    }

    return {getArrayTodos, addTodo, removeTodo, updateTodo}
}

export { allTodos }