import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

import { Task } from 'src/app/models/task.model'

import { TaskService } from './task.service'

@Injectable({
  providedIn: 'root',
})
export class TasksObservableService {
  private tasksSubject: Subject<Task[]>
  private tasks: Task[] = []

  constructor(private tasksService: TaskService) {
    this.tasksSubject = new Subject<Task[]>()
    this.tasksService.getTasksService.execute().subscribe((tasks) => {
      this.tasks = tasks
    })
  }

  getTasks() {
    return this.tasksSubject.asObservable()
  }

  private notifyTasks(tasks?: Task[]) {
    this.tasksSubject.next(tasks || this.tasks)
  }

  addTask(task: Task) {
    this.tasks.push(task)
    this.notifyTasks(this.tasks)
  }

  updateTask(task: Task) {
    this.tasks = this.tasks.map((_task) => {
      if (_task.id !== task.id) {
        return _task
      }

      return task
    })
    this.notifyTasks(this.tasks)
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter((_task) => {
      return _task.id !== task.id
    })
    this.notifyTasks(this.tasks)
  }
}
