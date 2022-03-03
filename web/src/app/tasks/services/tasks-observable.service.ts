import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Task } from 'src/app/models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksObservableService {
  private tasksSubject: Subject<Task[]>

  constructor() {
    this.tasksSubject = new Subject<Task[]>()
  }

  getTasks() {
    return this.tasksSubject.asObservable()
  }

  notifyTasks(tasks: Task[]) {
    this.tasksSubject.next(tasks)
  }
}
