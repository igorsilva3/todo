import { Injectable } from '@angular/core';
import { GetTasksService } from './get-tasks.service';
import { DeleteTaskService } from './delete-task.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    public getTaskService: GetTasksService,
    public deleteTaskService: DeleteTaskService
  ) { }
}
