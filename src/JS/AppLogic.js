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
    this.currentProject = newProject; // Here, we set the new project as the current project
  }

  // Function to set the current project
  setCurrentProject(projectName) {
    const project = this.projects.find(p => p.name === projectName);
    if (project) {
      this.currentProject = project;
    } else {
      throw new Error(`Project doesn't exist`);
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
      todo.isComplete = !todo.isComplete;
    } else {
      throw new Error('Todo not found');
    }
  }

  // Function to delete a Todo
  deleteTodo(todoIndex) {
    this.currentProject.removeTodo(todoIndex);
  }

  saveProjects() {
    StorageManager.saveToLocalStorage('projects', this.projects);
  }

  // Call this method when the app starts to load any saved projects and todos
  loadProjects() {
    const savedProjects = StorageManager.getFromLocalStorage('projects');
    if (savedProjects) {
      this.projects = savedProjects.map(proj => {
        const project = new Project(proj.name);
        project.todos = proj.todos.map(td => new Todo(td.title, td.description, td.dueDate, td.priority, td.notes, td.checklist));
        return project;
      });
      // Optionally set the first project as the current project
      this.currentProject = this.projects[0];
    } else {
      // Create a default project if no projects are saved
      this.createProject('Default');
    }
}
}

export default AppLogic;