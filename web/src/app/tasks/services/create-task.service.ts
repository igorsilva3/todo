import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { Task } from './../../models/task.model';
import { environment } from './../../../environments/environment';

type CreateTaskDTO = {
  title: string
  description?: string
  status: 'open' | 'done'
}

@Injectable({
  providedIn: 'root'
})
export class CreateTaskService {
  private apiUrl = environment.apiUrl

  constructor(private httpClient: HttpClient) { }

  public execute(data: CreateTaskDTO): Observable<Task> {
    return this.httpClient.post<Task>(`${this.apiUrl}/tasks`, data)
  }
}
