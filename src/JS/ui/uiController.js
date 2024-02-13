import AppLogic from '../AppLogic.js';
import DOMManager from './domManager.js';

// Assuming we already have a form for adding todos and a form for adding projects
const todoForm = document.querySelector('#todo-form');
const projectForm = document.querySelector('#project-form');

const appLogic = new AppLogic();
const domManager = new DOMManager(appLogic);

// Event listener for adding a new todo
todoForm.addEventListener('submit', event => {
  event.preventDefault();
  const title = todoForm.querySelector('input[name="title"]').value;
  const description = todoForm.querySelector('textarea[name="description"]').value;
  const dueDate = todoForm.querySelector('input[name="due-date"]').value;
  const priority = todoForm.querySelector('select[name="priority"]').value;
  appLogic.createTodo(title, description, dueDate, priority);
  domManager.renderTodos();
  todoForm.reset();
});

// Event listener for adding a new project
projectForm.addEventListener('submit', event => {
  event.preventDefault();
  const name = projectForm.querySelector('input[name="name"]').value;
  appLogic.createProject(name);
  domManager.renderProjects();
  projectForm.reset();
});

// Initial render of projects and todos
domManager.renderProjects();
domManager.renderTodos();

// Add the initial rendering logic here
appLogic.loadProjects();
domManager.renderProjects();
if (appLogic.projects.length > 0) {
  domManager.renderTodos();
}

export { appLogic, domManager };