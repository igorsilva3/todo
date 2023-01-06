import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetTokenSessionService {

  constructor() { }

  public execute(token: string): void {
    sessionStorage.setItem('token', token);
  }
}
