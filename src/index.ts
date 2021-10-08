import { TaskCollection } from "./TaskCollection";

let tasks1 = new TaskCollection();
tasks1.addTodo("Buy Biryani");
tasks1.addTodo("Buy Mango");
tasks1.addTodo("Buy Chicken");

tasks1.taskDone(2);
tasks1.printTodos();
tasks1.getTodoById(2);