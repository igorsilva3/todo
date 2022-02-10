import { Component, OnInit, Input } from '@angular/core'

import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

import { Task } from 'src/app/models/task.model'
import { TaskService } from '../services/task.service'

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

  constructor(private modalService: NgbModal, private service: TaskService) {}

  ngOnInit(): void {
    this.dataForm = {
      title: this.task.title,
      description: this.task.description,
    }
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
      })
  }
}
