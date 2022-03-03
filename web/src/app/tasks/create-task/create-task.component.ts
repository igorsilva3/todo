import { Component, OnInit } from '@angular/core'

import { Task } from '../../models/task.model'

import { TaskService } from '../services/task.service'
import { TasksObservableService } from './../services/tasks-observable.service';

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

  constructor(private service: TaskService, private tasksObservableService: TasksObservableService) {}

  ngOnInit(): void {
  }

  public createTask(): void {
    let tasks: Task[] = []

    this.service.getTasksService.execute().subscribe((_tasks) => {
      tasks = _tasks
    })

    this.service.createTaskService.execute(this.dataForm).subscribe(() => {
      this.clearForm()
    })

    this.tasksObservableService.notifyTasks(tasks)
  }

  private clearForm() {
    this.dataForm = {
      ...this.dataForm,
      title: '',
      description: '',
    }
  }
}
