import { Component, OnInit } from '@angular/core';

import { GetTasksService } from './../services/get-tasks.service';

import { Task } from './../../models/task.model';
@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css'],
  providers: [ GetTasksService ]
})
export class TasksListComponent implements OnInit {
  public tasks: Task[]

  constructor(private service: GetTasksService) { }

  ngOnInit(): void {
    this.tasks = this.service.execute()
  }

}
