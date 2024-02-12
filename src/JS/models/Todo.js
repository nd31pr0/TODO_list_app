class Todo {
    constructor(title, description, dueDate, priority, notes, checklist, isComplete) {
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
      this.notes = notes || '';
      this.checklist = checklist || []; // assuming checklist is an array of items
      this.isComplete = isComplete;
    }
  }
  
  export default Todo;