import { Component, OnInit, Input } from '@angular/core';

import { TaskService } from '../services/task.service';

import { Task } from '../../models/task.model';
@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css'],
  providers: [ TaskService ]
})
export class ListTasksComponent implements OnInit {
  @Input()
  public tasks: Task[]

  constructor(private service: TaskService) { }

  ngOnInit(): void {
  }

  public deleteTask({ id }: { id: number }): void {
    this.service.deleteTaskService.execute({ id }).subscribe(() => {
      this.tasks = this.tasks.filter(task => task.id !== id)
    })
  }

  public updateTask({ id, data }: { id: number, data: Partial<Task> }) {
    this.service.updateTaskService.execute({ id, data }).subscribe(task => {
      const index = this.tasks.findIndex(t => t.id === id)
      this.tasks[index] = task
    })
  }

}
