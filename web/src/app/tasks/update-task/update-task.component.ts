import { Component, OnInit, Input } from '@angular/core'

import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

import { Task } from 'src/app/models/task.model'

import { TaskService } from '../services/task.service'
import { TasksObservableService } from '../services/tasks-observable.service'

type UpdateTaskDTO = {
  title: string
  description?: string
}
@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css'],
})
export class UpdateTaskComponent implements OnInit {
  @Input() task: Task

  dataForm: UpdateTaskDTO

  private tasks: Task[] = []

  constructor(
    private modalService: NgbModal,
    private service: TaskService,
    private tasksObservableService: TasksObservableService,
  ) {}

  ngOnInit(): void {
    this.dataForm = {
      title: this.task.title,
      description: this.task.description,
    }

    this.tasksObservableService.getTasks().subscribe((tasks) => {
      this.tasks = tasks
    })
  }

  open(content: any) {
    this.modalService
      .open(content, {
        ariaLabelledBy: 'modal-basic',
      })
      .shown.subscribe()
  }

  updateTask() {
    this.service.updateTaskService
      .execute({
        id: this.task.id,
        data: {
          ...this.task,
          ...this.dataForm,
        },
      })
      .subscribe((task) => {
        this.dataForm = {
          ...task,
        }

        this.tasks = this.tasks.map((_task) => {
          if (_task.id !== task.id) {
            return _task
          }

          return task
        })
      })

    this.tasksObservableService.notifyTasks(this.tasks)
  }
}
