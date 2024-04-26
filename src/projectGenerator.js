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

//Adding and rendering some projects for testing purposes:
allProjects.addProject('Work');
allProjects.addProject('Vacation');
allProjects.addProject('Stream');
console.log(allProjects.getProjects());
const projectsDOM = document.querySelector('.projects');
const currentProjects = allProjects.getProjects();
currentProjects.forEach((project) => {
    const projectContainer = document.createElement('div');
    projectContainer.textContent = project;
    projectsDOM.appendChild(projectContainer);           
})


export { generateProject, allProjects };