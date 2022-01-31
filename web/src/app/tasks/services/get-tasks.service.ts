import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';

import { Task } from '../../models/task.model'
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class GetTasksService {
  private baseUrl = 'http://localhost:3000'

  constructor(private httpClient: HttpClient) { }

  public execute(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(`${this.baseUrl}/tasks/`)
  }
}
