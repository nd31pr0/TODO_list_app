import Todo from './models/Todo.js';
import Project from './models/Project.js';

class AppLogic {
  constructor() {
    this.projects = [];
    this.currentProject = null;
  }

  // Function to create a new Todo and add it to the current project
  createTodo(title, description, dueDate, priority, notes, checklist) {
    const newTodo = new Todo(title, description, dueDate, priority, notes, checklist);
    if (this.currentProject) {
      this.currentProject.addTodo(newTodo);
    } else {
      throw new Error('No current project selected');
    }
  }

  // Function to create a new Project
  createProject(name) {
    const newProject = new Project(name);
    this.projects.push(newProject);
    this.currentProject = newProject; // Optionally set the new project as the current project
  }

  // Function to set the current project
  setCurrentProject(projectName) {
    const project = this.projects.find(p => p.name === projectName);
    if (project) {
      this.currentProject = project;
    } else {
      throw new Error('Project not found');
    }
  }

  // Function to change the priority of a Todo
  changeTodoPriority(todoIndex, newPriority) {
    const todo = this.currentProject.toDos[todoIndex];
    if (todo) {
      todo.priority = newPriority;
    } else {
      throw new Error('Todo not found');
    }
  }

  // Function to mark a Todo as complete
  toggleTodoComplete(todoIndex) {
    const todo = this.currentProject.toDos[todoIndex];
    if (todo) {
      todo.isComplete = !todo.isComplete; // Assuming you add an isComplete property to your Todo class
    } else {
      throw new Error('Todo not found');
    }
  }

  // Function to delete a Todo
  deleteTodo(todoIndex) {
    this.currentProject.removeTodo(todoIndex);
  }

  // Additional functions to manipulate todos and projects can be added here
}

export default AppLogic;