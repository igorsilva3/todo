import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetTokenSessionService {

  constructor() { }

  public execute(): string | null {
    return sessionStorage.getItem('token');
  }
}
