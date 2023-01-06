import { Injectable } from '@angular/core';

import { GetTasksService } from './get-tasks.service';
import { GetTaskByIdService } from './get-task-by-id.service';
import { DeleteTaskService } from './delete-task.service';
import { UpdateTaskService } from './update-task.service';
import { CreateTaskService } from './create-task.service';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    public getTaskByIdService: GetTaskByIdService,
    public getTasksService: GetTasksService,
    public deleteTaskService: DeleteTaskService,
    public updateTaskService: UpdateTaskService,
    public createTaskService: CreateTaskService
  ) { }
}
