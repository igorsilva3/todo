import { Injectable } from '@angular/core'

import { Task } from '../../models/task.model'

@Injectable({
  providedIn: 'root',
})
export class GetTasksService {
  constructor() { }

  public static execute(): Task[] {
    return [
      {
        id: 1,
        title: 'Task 1',
        description: 'Task 1 description',
        status: 'done',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        title: 'Task 2',
        status: 'open',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]
  }
}
