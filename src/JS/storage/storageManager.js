class StorageManager {
    static saveToLocalStorage(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  
    static getFromLocalStorage(key) {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    }
  }
  
  export default StorageManager;