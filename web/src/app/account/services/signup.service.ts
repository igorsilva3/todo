import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { environment } from 'src/environments/environment'

type SignupDTO = {
  firstName: string
  lastName: string
  email: string
  password: string
}

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  private apiUrl = environment.apiUrl

  constructor(private httpClient: HttpClient) {}

  public execute({ firstName, lastName, email, password }: SignupDTO) {
    if (!firstName || !lastName || !email || !password) {
      throw new Error('All fields are required')
    }

    return this.httpClient.post(`${this.apiUrl}/users`, {
      firstName,
      lastName,
      email,
      password,
    })
  }
}
