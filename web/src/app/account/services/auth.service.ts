import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { environment } from 'src/environments/environment'

type AuthDTO = {
  email: string
  password: string
}

type AuthResponseDTO = {
  user: {
    id: string
    firstName: string
    lastName: string
    email: string
    createdAt: Date
    updatedAt: Date
  }
  token: string
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl

  constructor(private httpClient: HttpClient) {}

  public execute({ email, password }: AuthDTO) {
    if (!email || !password) {
      throw new Error('Email and password are required')
    }

    return this.httpClient.get<AuthResponseDTO>(`${this.apiUrl}/auth`)
  }
}
