"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCollection = void 0;
const Task_1 = require("./Task");
class TaskCollection {
    constructor(items = []) {
        this.items = items;
        this.nextID = 1;
        this.itemMap = new Map();
    }
    addTodo(task) {
        let item = new Task_1.Task(this.nextID, task, false);
        this.nextID++;
        this.items.push(item);
        this.itemMap.set(this.nextID, new Task_1.Task(this.nextID, task));
    }
    printTodos() {
        this.items.forEach((item) => item.printDetails());
    }
    taskDone(DoneID) {
        let item = this.items.find((item) => item.taskID === DoneID);
        item.status = true;
    }
    getTodoById(id) {
        return this.itemMap.get(id);
    }
}
exports.TaskCollection = TaskCollection;
