import { Component, OnInit, Input } from '@angular/core'
import { TaskService } from './../services/task.service'

import { Task } from './../../models/task.model'

type CreateTaskDTO = {
  title: string
  description?: string
  status: 'open' | 'done'
}

@Component({
  selector: 'app-create-tasks',
  templateUrl: './create-tasks.component.html',
  styleUrls: ['./create-tasks.component.css'],
  providers: [TaskService],
})
export class CreateTasksComponent implements OnInit {
  public dataForm: CreateTaskDTO = {
    title: '',
    description: '',
    status: 'open',
  }

  @Input()
  public tasks: Task[]

  constructor(private service: TaskService) {}

  ngOnInit(): void {}

  public createTask(): void {
    this.service.createTaskService
      .execute(this.dataForm)
      .subscribe((task) => {
        this.tasks.push(task)

        // Clear form
        this.dataForm = {
          ...this.dataForm,
          title: '',
          description: '',
        }
      })
  }
}
