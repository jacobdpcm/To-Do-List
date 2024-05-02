/*function generateProject(name){
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
}*/
import "./todoGenerator.js";


const allProjects = (function(){
    let allProjectsArray = [];
    let currentProjectName = '';
    let currentProjectArray = [];

    const getProjects = () => {return allProjectsArray};
    const addProject = (projectName) => {
        allProjectsArray.push(projectName);
        allProjectsArray.sort();
    };
    const removeProject = (projectName) => {
        allProjectsArray.splice(allProjectsArray.indexOf(projectName), 1);
    }

    const getCurrentProject = () => {return currentProjectArray};
    const setCurrentProjectName = (projectName) => {currentProjectName = projectName};
    const generateCurrentProject = (arrayTodos) => {
        currentProjectArray = arrayTodos.filter(function(todo){
            return todo.todoProject === currentProjectName;
        })
    }

    return {getProjects, addProject, removeProject, getCurrentProject, setCurrentProjectName, generateCurrentProject}
})();

//Adding some projects for placeholder purposes:
allProjects.addProject('Work');
allProjects.addProject('Vacation');
allProjects.addProject('Stream');
allProjects.addProject('Hopes and Dreams');
console.log(allProjects.getProjects());


export { allProjects };