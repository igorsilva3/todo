import { TasksObservableService } from './../services/tasks-observable.service'
import { Component, Input, OnInit } from '@angular/core'

import { TaskService } from './../services/task.service'

import { Task } from './../../models/task.model'
@Component({
  selector: 'app-check-task',
  templateUrl: './check-task.component.html',
  styleUrls: ['./check-task.component.css'],
  providers: [TaskService],
})
export class CheckTaskComponent implements OnInit {
  @Input() task: Task

  constructor(
    private service: TaskService,
    private tasksObservableService: TasksObservableService,
  ) {}

  ngOnInit(): void {}

  public checkTask() {
    this.service.updateTaskService
      .execute({
        id: this.task.id,
        data: {
          ...this.task,
          status: 'done',
        },
      })
      .subscribe((_task) => {
        this.tasksObservableService.updateTask(_task)
      })
  }

  public unCheckTask() {
    this.service.updateTaskService
      .execute({
        id: this.task.id,
        data: {
          ...this.task,
          status: 'open',
        },
      })
      .subscribe((_task) => {
        this.tasksObservableService.updateTask(_task)
      })
  }
}
