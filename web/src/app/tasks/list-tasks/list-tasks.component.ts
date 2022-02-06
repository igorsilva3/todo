import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { TaskService } from '../services/task.service';

import { Task } from '../../models/task.model';
@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css'],
  providers: [ TaskService ]
})
export class ListTasksComponent implements OnChanges {
  @Input()
  public tasks: Task[]

  constructor(private service: TaskService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.service.getTasksService.execute().subscribe(tasks => {
      this.tasks = tasks
    })
  }
}
