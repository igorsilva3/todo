import { Injectable } from '@angular/core';

import { GetTasksService } from './get-tasks.service';
import { DeleteTaskService } from './delete-task.service';
import { UpdateTaskService } from './update-task.service';
import { CreateTaskService } from './create-task.service';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    public getTaskService: GetTasksService,
    public deleteTaskService: DeleteTaskService,
    public updateTaskService: UpdateTaskService,
    public createTaskService: CreateTaskService
  ) { }
}
