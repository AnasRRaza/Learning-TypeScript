"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
class Task {
    constructor(taskID, task, status = true) {
        this.taskID = taskID;
        this.task = task;
        this.status = status;
    }
    printDetails() {
        console.log(`${this.taskID}\t${this.task}\t${this.status}\t`);
    }
}
exports.Task = Task;
