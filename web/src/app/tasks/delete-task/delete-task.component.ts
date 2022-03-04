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

  private tasks: Task[] = []

  constructor(private service: TaskService, private tasksObservableService: TasksObservableService) {}

  ngOnInit(): void {
    this.tasksObservableService.getTasks().subscribe((tasks) => {
      this.tasks = tasks
    })
  }

  public deleteTask() {
    this.service.deleteTaskService
      .execute({ id: this.taskId })
      .subscribe(() => {
        this.tasks = this.tasks.filter((task) => task.id !== this.taskId)
      })

    this.tasksObservableService.notifyTasks(this.tasks)
  }
}
