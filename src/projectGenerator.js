function generateProject(name){
    let projectName = name;
    let projectTodos = [];

    const changeName = (newName) => {projectName = newName}
    const makeProjectArrayTodos = (project, arrayTodos) => {
        projectTodos = arrayTodos.filter(function(todo){
            return todo.todoProject = project;
        })
    };
    const getProjectArrayTodos = () => {return projectTodos};

    return {changeName, makeProjectArrayTodos, getProjectArrayTodos};
}

export { generateProject };