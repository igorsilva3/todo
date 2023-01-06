import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';

import { Task } from '../../models/task.model'
import { Observable } from 'rxjs/internal/Observable';

import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class GetTasksService {
  constructor(private httpClient: HttpClient) { }
  private apiUrl = environment.apiUrl

  public execute(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(`${this.apiUrl}/tasks/`)
  }
}
