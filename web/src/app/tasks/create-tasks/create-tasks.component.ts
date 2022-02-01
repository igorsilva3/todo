import { Component, OnInit } from '@angular/core'
import { TaskService } from './../services/task.service'

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

  constructor(private service: TaskService) {}

  ngOnInit(): void {}

  public createTask(): void {
    this.service.createTaskService
      .execute(this.dataForm)
      .subscribe(() => {})

    // Clear form
    this.dataForm = {
      ...this.dataForm,
      title: '',
      description: '',
    }
  }
}
