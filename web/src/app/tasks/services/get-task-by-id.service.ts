import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { Task } from '../../models/task.model'

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GetTaskByIdService {
  constructor(private httpClient: HttpClient) { }
  private apiUrl = environment.apiUrl

  public execute({ id }: { id: number }): Observable<Task> {
    return this.httpClient.get<Task>(`${this.apiUrl}/tasks/${id}`)
  }
}
