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

const allProjects = (function(){
    let allProjectsArray = [];

    const getProjects = () => {return allProjectsArray};
    const addProject = (projectName) => {
        allProjectsArray.push(projectName);
        allProjectsArray.sort();
    };
    const removeProject = (projectName) => {
        allProjectsArray.splice(allProjectsArray.indexOf(projectName), 1);
    }

    return {getProjects, addProject, removeProject}
})();

//Adding some projects for testing purposes:
allProjects.addProject('Work');
allProjects.addProject('Vacation');
allProjects.addProject('Stream');
console.log(allProjects.getProjects());

export { generateProject, allProjects };