import "./todoGenerator.js";


const allProjects = (function(){
    let allProjectsArray = [];
    let currentProjectName = '';
    let currentProjectArray = [];

    const getProjects = () => {return allProjectsArray};
    const addProject = (projectName) => {
        allProjectsArray.push(projectName);
        allProjectsArray.sort();
        updateProjectStorage();
    };
    const removeProject = (projectName) => {
        allProjectsArray.splice(allProjectsArray.indexOf(projectName), 1);
        updateProjectStorage();
    }

    const getCurrentProject = () => {return currentProjectArray};
    const setCurrentProjectName = (projectName) => {currentProjectName = projectName};
    const generateCurrentProject = (arrayTodos) => {
        currentProjectArray = arrayTodos.filter(function(todo){
            return todo.todoProject === currentProjectName;
        })
    }

    const updateProjectStorage = () => {
        const arrayProjectsSerialized = JSON.stringify(allProjectsArray);
        localStorage.setItem('storedProjects', arrayProjectsSerialized);
    }
    const retrieveProjectStorage = () => {
        allProjectsArray = JSON.parse(localStorage.getItem('storedProjects'));
        if(allProjectsArray === null){allProjectsArray = []}
    }

    return {getProjects, addProject, removeProject, getCurrentProject, setCurrentProjectName, generateCurrentProject, updateProjectStorage, retrieveProjectStorage}
})();

//Adding some projects for placeholder purposes:
/*allProjects.addProject('Work');
allProjects.addProject('Vacation');
allProjects.addProject('Stream');
allProjects.addProject('Hopes and Dreams');
console.log(allProjects.getProjects());*/


export { allProjects };