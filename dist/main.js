/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/AppLogic.js":
/*!****************************!*\
  !*** ./src/js/AppLogic.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_Todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/Todo.js */ \"./src/js/models/Todo.js\");\n/* harmony import */ var _models_Project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/Project.js */ \"./src/js/models/Project.js\");\n\n\n\nclass AppLogic {\n  constructor() {\n    this.projects = [];\n    this.currentProject = null;\n  }\n\n  // Function to create a new Todo and add it to the current project\n  createTodo(title, description, dueDate, priority, notes, checklist) {\n    const newTodo = new _models_Todo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title, description, dueDate, priority, notes, checklist);\n    if (this.currentProject) {\n      this.currentProject.addTodo(newTodo);\n    } else {\n      throw new Error('No current project selected');\n    }\n  }\n\n  // Function to create a new Project\n  createProject(name) {\n    const newProject = new _models_Project_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](name);\n    this.projects.push(newProject);\n    this.currentProject = newProject; // Optionally set the new project as the current project\n  }\n\n  // Function to set the current project\n  setCurrentProject(projectName) {\n    const project = this.projects.find(p => p.name === projectName);\n    if (project) {\n      this.currentProject = project;\n    } else {\n      throw new Error('Project not found');\n    }\n  }\n\n  // Function to change the priority of a Todo\n  changeTodoPriority(todoIndex, newPriority) {\n    const todo = this.currentProject.toDos[todoIndex];\n    if (todo) {\n      todo.priority = newPriority;\n    } else {\n      throw new Error('Todo not found');\n    }\n  }\n\n  // Function to mark a Todo as complete\n  toggleTodoComplete(todoIndex) {\n    const todo = this.currentProject.toDos[todoIndex];\n    if (todo) {\n      todo.isComplete = !todo.isComplete; // Assuming you add an isComplete property to your Todo class\n    } else {\n      throw new Error('Todo not found');\n    }\n  }\n\n  // Function to delete a Todo\n  deleteTodo(todoIndex) {\n    this.currentProject.removeTodo(todoIndex);\n  }\n\n  saveProjects() {\n    StorageManager.saveToLocalStorage('projects', this.projects);\n  }\n\n  // Call this method when the app starts to load any saved projects and todos\n  loadProjects() {\n    const savedProjects = StorageManager.getFromLocalStorage('projects');\n    if (savedProjects) {\n      this.projects = savedProjects.map(proj => {\n        const project = new _models_Project_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](proj.name);\n        project.todos = proj.todos.map(td => new _models_Todo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](td.title, td.description, td.dueDate, td.priority, td.notes, td.checklist));\n        return project;\n      });\n      // Optionally set the first project as the current project\n      this.currentProject = this.projects[0];\n    } else {\n      // Create a default project if no projects are saved\n      this.createProject('Default');\n    }\n}\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppLogic);\n\n//# sourceURL=webpack://todo_list_app/./src/js/AppLogic.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AppLogic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppLogic.js */ \"./src/js/AppLogic.js\");\n/* harmony import */ var _ui_uiController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/uiController.js */ \"./src/js/ui/uiController.js\");\n\n\n\nconst appLogic = new _AppLogic_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n// Load existing projects from localStorage when the app starts\nappLogic.loadProjects();\n_ui_uiController_js__WEBPACK_IMPORTED_MODULE_1__.domManager.renderProjects();\n_ui_uiController_js__WEBPACK_IMPORTED_MODULE_1__.domManager.renderTodos();\n\n// Example of creating a new project and saving it\nappLogic.createProject('Work');\nappLogic.saveProjects(); // Save the new project to localStorage\n\nconsole.log(Hello);\n\n//# sourceURL=webpack://todo_list_app/./src/js/index.js?");

/***/ }),

/***/ "./src/js/models/Project.js":
/*!**********************************!*\
  !*** ./src/js/models/Project.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Project {\n    constructor(name) {\n      this.name = name;\n      this.toDos = [];\n    }\n  \n    addTodo(todo) {\n      if (todo instanceof Todo) {\n        this.toDos.push(todo);\n      } else {\n        throw new Error('Can only add instances of Todo to a project');\n      }\n    }\n  \n    removeTodo(todoIndex) {\n      this.toDos.splice(todoIndex, 1);\n    }\n  \n    // Additional methods to modify todos in the project can be added here\n  }\n  \n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://todo_list_app/./src/js/models/Project.js?");

/***/ }),

/***/ "./src/js/models/Todo.js":
/*!*******************************!*\
  !*** ./src/js/models/Todo.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Todo {\n    constructor(title, description, dueDate, priority, notes, checklist, isComplete) {\n      this.title = title;\n      this.description = description;\n      this.dueDate = dueDate;\n      this.priority = priority;\n      this.notes = notes || '';\n      this.checklist = checklist || []; // assuming checklist is an array of items\n      this.isComplete = isComplete;\n    }\n  }\n  \n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);\n\n//# sourceURL=webpack://todo_list_app/./src/js/models/Todo.js?");

/***/ }),

/***/ "./src/js/storage/storageManager.js":
/*!******************************************!*\
  !*** ./src/js/storage/storageManager.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass StorageManager {\n    static saveToLocalStorage(key, value) {\n      localStorage.setItem(key, JSON.stringify(value));\n    }\n  \n    static getFromLocalStorage(key) {\n      const value = localStorage.getItem(key);\n      return value ? JSON.parse(value) : null;\n    }\n  }\n  \n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StorageManager);\n\n//# sourceURL=webpack://todo_list_app/./src/js/storage/storageManager.js?");

/***/ }),

/***/ "./src/js/ui/domManager.js":
/*!*********************************!*\
  !*** ./src/js/ui/domManager.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _AppLogic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AppLogic.js */ \"./src/js/AppLogic.js\");\n/* harmony import */ var _storage_storageManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storage/storageManager.js */ \"./src/js/storage/storageManager.js\");\n/* harmony import */ var _models_Todo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Todo.js */ \"./src/js/models/Todo.js\");\n/* harmony import */ var _models_Project_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/Project.js */ \"./src/js/models/Project.js\");\n\n\n\n\n\nclass DOMManager {\n    constructor(appLogic) {\n      this.appLogic = appLogic;\n    }\n  \n    // Function to render projects\n    renderProjects() {\n      const projectList = document.querySelector('#project-list');\n      projectList.innerHTML = ''; // Clear the list first\n  \n      this.appLogic.projects.forEach(project => {\n        const listItem = document.createElement('li');\n        listItem.textContent = project.name;\n        listItem.addEventListener('click', () => this.selectProject(project.name));\n        projectList.appendChild(listItem);\n      });\n    }\n  \n    // Function to render todos for the current project\n    renderTodos() {\n      const todoList = document.querySelector('#todo-list');\n      todoList.innerHTML = ''; // Clear the list first\n    \n      if (this.appLogic.currentProject) {\n        this.appLogic.currentProject.todos.forEach((todo, index) => {\n          const listItem = document.createElement('li');\n          listItem.innerHTML = `\n            <span>${todo.title} - Due: ${todo.dueDate}</span>\n            <button class=\"edit-todo-btn\" data-index=\"${index}\">Edit</button>\n            <button class=\"delete-todo-btn\" data-index=\"${index}\">Delete</button>\n          `;\n          listItem.classList.add(`priority-${todo.priority}`);\n          todoList.appendChild(listItem);\n        });\n      }\n      this.attachTodoEventListeners();\n    }\n    \n    // Function to attach event listeners to each todo's edit and delete buttons\n    attachTodoEventListeners() {\n      document.querySelectorAll('.edit-todo-btn').forEach(btn => {\n        btn.addEventListener('click', event => {\n          const index = event.target.dataset.index;\n          this.editTodo(index);\n        });\n      });\n    \n      document.querySelectorAll('.delete-todo-btn').forEach(btn => {\n        btn.addEventListener('click', event => {\n          const index = event.target.dataset.index;\n          this.appLogic.deleteTodo(index);\n          this.appLogic.saveProjects(); // Save changes to localStorage\n          this.renderTodos();\n        });\n      });\n    }\n  \n    // Function to handle selecting a project\n    selectProject(projectName) {\n      this.appLogic.setCurrentProject(projectName);\n      this.renderTodos();\n    }\n  \n    // Function to handle editing a todo\n    editTodo(todoIndex) {\n      // You would implement logic here to open a modal or form to edit the todo\n    }\n  \n    // Additional methods for updating the UI can be added here\n  }\n  \n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMManager);\n\n//# sourceURL=webpack://todo_list_app/./src/js/ui/domManager.js?");

/***/ }),

/***/ "./src/js/ui/uiController.js":
/*!***********************************!*\
  !*** ./src/js/ui/uiController.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   appLogic: () => (/* binding */ appLogic),\n/* harmony export */   domManager: () => (/* binding */ domManager)\n/* harmony export */ });\n/* harmony import */ var _AppLogic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AppLogic.js */ \"./src/js/AppLogic.js\");\n/* harmony import */ var _domManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domManager.js */ \"./src/js/ui/domManager.js\");\n\n\n\n// Assuming we already have a form for adding todos and a form for adding projects\nconst todoForm = document.querySelector('#todo-form');\nconst projectForm = document.querySelector('#project-form');\n\nconst appLogic = new _AppLogic_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nconst domManager = new _domManager_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](appLogic);\n\n// Event listener for adding a new todo\ntodoForm.addEventListener('submit', event => {\n  event.preventDefault();\n  const title = todoForm.querySelector('input[name=\"title\"]').value;\n  const description = todoForm.querySelector('textarea[name=\"description\"]').value;\n  const dueDate = todoForm.querySelector('input[name=\"due-date\"]').value;\n  const priority = todoForm.querySelector('select[name=\"priority\"]').value;\n  appLogic.createTodo(title, description, dueDate, priority);\n  domManager.renderTodos();\n  todoForm.reset();\n});\n\n// Event listener for adding a new project\nprojectForm.addEventListener('submit', event => {\n  event.preventDefault();\n  const name = projectForm.querySelector('input[name=\"name\"]').value;\n  appLogic.createProject(name);\n  domManager.renderProjects();\n  projectForm.reset();\n});\n\n// Initial render of projects and todos\ndomManager.renderProjects();\ndomManager.renderTodos();\n\n// Add the initial rendering logic here\nappLogic.loadProjects();\ndomManager.renderProjects();\nif (appLogic.projects.length > 0) {\n  domManager.renderTodos();\n}\n\n\n\n//# sourceURL=webpack://todo_list_app/./src/js/ui/uiController.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;