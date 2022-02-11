import { Component, OnInit, Input } from '@angular/core'
import { TaskService } from '../services/task.service'

import { Task } from '../../models/task.model'

type CreateTaskDTO = {
  title: string
  description?: string
  status: 'open' | 'done'
}

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
  providers: [TaskService],
})
export class CreateTaskComponent implements OnInit {
  public dataForm: CreateTaskDTO = {
    title: '',
    description: '',
    status: 'open',
  }

  constructor(private service: TaskService) {}

  ngOnInit(): void {}

  public createTask(): void {
    this.service.createTaskService.execute(this.dataForm).subscribe(() => {
      this.clearForm()
    })
  }

  private clearForm() {
    this.dataForm = {
      ...this.dataForm,
      title: '',
      description: '',
    }
  }
}
