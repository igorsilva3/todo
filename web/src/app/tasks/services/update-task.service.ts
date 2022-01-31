import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { Task } from './../../models/task.model';

import { environment } from './../../../environments/environment.dev';

type UpdateTaskDTO = {
  id: number;
  data: Partial<Task>;
}

@Injectable({
  providedIn: 'root'
})
export class UpdateTaskService {
  private apiUrl = environment.apiUrl

  constructor(private httpClient: HttpClient) { }

  public execute({ id, data }: UpdateTaskDTO): Observable<Task> {
    return this.httpClient.put<Task>(`${this.apiUrl}/tasks/${id}`, data)
  }
}
