import { Component, OnInit, Input } from '@angular/core'

import { Task } from '../../models/task.model'

import { TaskService } from '../services/task.service'
import { TasksObservableService } from '../services/tasks-observable.service'
@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.css'],
})
export class DeleteTaskComponent implements OnInit {
  @Input() taskId: number

  constructor(
    private service: TaskService,
    private tasksObservableService: TasksObservableService,
  ) {}

  ngOnInit(): void {
  }

  public deleteTask() {
    let task: Task

    this.service.getTaskByIdService.execute({ id: this.taskId }).subscribe((_task) => {
      task = _task
    })

    this.service.deleteTaskService
      .execute({ id: this.taskId })
      .subscribe(() => {
        this.tasksObservableService.deleteTask(task)
      })
  }
}
