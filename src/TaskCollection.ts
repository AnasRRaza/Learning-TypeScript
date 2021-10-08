
import { Task } from "./Task"

export class TaskCollection {
  private nextID: number = 1;
  private itemMap = new Map<number, Task>();

  constructor(public items: Task[] = []) {

  }

  public addTodo(task: string): void {
    let item: Task = new Task(this.nextID, task, false);
    this.nextID++;
    this.items.push(item);
    this.itemMap.set(this.nextID, new Task(this.nextID, task))
  }

  public printTodos(): void {
    this.items.forEach((item) => item.printDetails());
  }

  public taskDone(DoneID): void {
    let item: Task = this.items.find((item) => item.taskID === DoneID);
    item.status = true;
  }

  public getTodoById(id: number): Task {
    return this.itemMap.get(id);
  }
}