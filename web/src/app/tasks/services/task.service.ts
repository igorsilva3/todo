import { Injectable } from '@angular/core';
import { GetTasksService } from './get-tasks.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {


  constructor(public getTaskService: GetTasksService) { }
}
