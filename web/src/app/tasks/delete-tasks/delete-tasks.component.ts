import { Component, OnInit, Input } from '@angular/core'

import { TaskService } from '../services/task.service'

import { Task } from '../../models/task.model'

@Component({
  selector: 'app-delete-tasks',
  templateUrl: './delete-tasks.component.html',
  styleUrls: ['./delete-tasks.component.css'],
})
export class DeleteTasksComponent implements OnInit {
  @Input() taskId: number

  @Input() tasks: Task[]

  constructor(private service: TaskService) {}

  ngOnInit(): void {}

  public deleteTask() {
    this.service.deleteTaskService
      .execute({ id: this.taskId })
      .subscribe(() => {
        this.tasks = this.tasks.filter((task) => task.id !== this.taskId)
      })
  }
}
