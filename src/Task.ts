

export class Task {

  constructor(public taskID: number, public task: string, public status: boolean = true) {

  }

  public printDetails(): void {
    console.log(`${this.taskID}\t${this.task}\t${this.status}\t`)
  }
}