import { Component, OnInit } from '@angular/core';

import { TaskService } from './../services/task.service';

import { Task } from './../../models/task.model';
@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css'],
  providers: [ TaskService ]
})
export class TasksListComponent implements OnInit {
  public tasks: Task[]

  constructor(private service: TaskService) { }

  ngOnInit(): void {
    this.service.getTaskService.execute().subscribe(tasks => this.tasks = tasks)
  }

}
