import AppLogic from '../AppLogic.js';
import StorageManager from '../storage/storageManager.js';
import Todo from '../models/Todo.js';
import Project from '../models/Project.js';

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
        this.appLogic.currentProject.todos.forEach((todo, index) => {
          const listItem = document.createElement('li');
          listItem.innerHTML = `
            <span>${todo.title} - Due: ${todo.dueDate}</span>
            <button class="edit-todo-btn" data-index="${index}">Edit</button>
            <button class="delete-todo-btn" data-index="${index}">Delete</button>
          `;
          listItem.classList.add(`priority-${todo.priority}`);
          todoList.appendChild(listItem);
        });
      }
      this.attachTodoEventListeners();
    }
    
    // Function to attach event listeners to each todo's edit and delete buttons
    attachTodoEventListeners() {
      document.querySelectorAll('.edit-todo-btn').forEach(btn => {
        btn.addEventListener('click', event => {
          const index = event.target.dataset.index;
          this.editTodo(index);
        });
      });
    
      document.querySelectorAll('.delete-todo-btn').forEach(btn => {
        btn.addEventListener('click', event => {
          const index = event.target.dataset.index;
          this.appLogic.deleteTodo(index);
          this.appLogic.saveProjects(); // Save changes to localStorage
          this.renderTodos();
        });
      });
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