function newTodo(title, description, dueDate, priority, checked){
    let todoTitle = title;
    let todoDescription = description;
    let todoDueDate = dueDate;
    let todoPriority = priority;
    let todoChecked = checked;

    const getTodo = () => {return [todoTitle, todoDescription, todoDueDate, todoPriority, todoChecked]};
    const updateDate = (newDate) => {todoDueDate = newDate};
    const updatePriority = (newPriority) => {todoPriority = newPriority};
    const updateChecked = (newChecked) => {todoChecked = newChecked};

    return {getTodo, updateDate, updatePriority, updateChecked};
}

function allTodos(){
    let arrayTodos = [];

    const getArrayTodos = () => {return arrayTodos};
    const addTodo = (todo) => {arrayTodos.push(todo.getTodo())};
    const removeTodo = (todo) => {arrayTodos.splice(indexOf(todo.getTodo(), 1))}

    return {getArrayTodos, addTodo, removeTodo}
}

export { newTodo, allTodos }