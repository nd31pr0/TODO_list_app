import AppLogic from './AppLogic.js';
import { domManager } from './ui/uiController.js';

const appLogic = new AppLogic();

// Load existing projects from localStorage when the app starts
appLogic.loadProjects();
domManager.renderProjects();
domManager.renderTodos();

// Example of creating a new project and saving it
appLogic.createProject('Work');
appLogic.saveProjects(); // Save the new project to localStorage