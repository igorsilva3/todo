import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { environment } from './../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DeleteTaskService {
  private apiUrl = environment.apiUrl

  constructor(private httpClient: HttpClient) { }

  public execute({ id }: { id: number }): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/tasks/${id}`);
  }
}
