import { Component, OnInit } from '@angular/core'

import { Task } from '../models/task.model'

import { TaskService } from './services/task.service'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  public tasks: Task[]

  constructor(private service: TaskService) {}

  ngOnInit(): void {
    this.service.getTasksService
      .execute()
      .subscribe((tasks) => (this.tasks = tasks))
  }
}
