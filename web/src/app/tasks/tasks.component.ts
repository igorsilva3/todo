import { Component, OnInit } from '@angular/core'

import { Task } from '../models/task.model'

import { TaskService } from './services/task.service'
import { TasksObservableService } from './services/tasks-observable.service'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  public tasks: Task[]

  constructor(
    private service: TaskService,
    private tasksObservableService: TasksObservableService,
  ) {
  }

  ngOnInit(): void {
    this.tasksObservableService.getTasks().subscribe((tasks) => {
      this.tasks = tasks
    })
  }
}
