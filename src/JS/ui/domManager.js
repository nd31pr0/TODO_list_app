class DOMManager {
    constructor(appLogic) {
      this.appLogic = appLogic;
    }
  
    // Function to render projects
    renderProjects() {
      const projectList = document.querySelector('#project-list');
      projectList.innerHTML = ''; // Clear the list first
  
      this.appLogic.projects.forEach(project => {
        const listItem = document.createElement('li');
        listItem.textContent = project.name;
        listItem.addEventListener('click', () => this.selectProject(project.name));
        projectList.appendChild(listItem);
      });
    }
  
    // Function to render todos for the current project
    renderTodos() {
      const todoList = document.querySelector('#todo-list');
      todoList.innerHTML = ''; // Clear the list first
  
      if (this.appLogic.currentProject) {
        this.appLogic.currentProject.toDos.forEach((todo, index) => {
          const listItem = document.createElement('li');
          listItem.textContent = `${todo.title} - Due: ${todo.dueDate}`;
          listItem.classList.add(`priority-${todo.priority}`);
          listItem.addEventListener('click', () => this.editTodo(index));
          todoList.appendChild(listItem);
        });
      }
    }
  
    // Function to handle selecting a project
    selectProject(projectName) {
      this.appLogic.setCurrentProject(projectName);
      this.renderTodos();
    }
  
    // Function to handle editing a todo
    editTodo(todoIndex) {
      // You would implement logic here to open a modal or form to edit the todo
    }
  
    // Additional methods for updating the UI can be added here
  }
  
  export default DOMManager;