import { Component, OnInit, Input } from '@angular/core'

import { TaskService } from '../services/task.service'

import { Task } from '../../models/task.model'

@Component({
  selector: 'app-delete-task',
  templateUrl: './delete-task.component.html',
  styleUrls: ['./delete-task.component.css'],
})
export class DeleteTaskComponent implements OnInit {
  @Input() taskId: number

  constructor(private service: TaskService) {}

  ngOnInit(): void {}

  public deleteTask() {
    this.service.deleteTaskService
      .execute({ id: this.taskId })
      .subscribe()
  }
}
