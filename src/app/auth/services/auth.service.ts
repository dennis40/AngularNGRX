import {Injectable} from '@angular/core'
import {environment} from '../../../environments/environment'
import {HttpClient} from '@angular/common/http'

import {RegisterRequestInterface} from '../types/registerRequest.interface'
import {CurrentUserInterface} from '../../shared/types/currentUser.interface'
import {AuthResponseInterface} from '../types/authResponse.interface'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'
import {LoginRequestInterface} from '../types/loginRequest.interface'
import {CurrentUserInputInterface} from '../../shared/types/currentUserInput.interface'

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  getUser(response: AuthResponseInterface): CurrentUserInterface {
    return response.user
  }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = `${environment.apiUrl}/users`
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser))
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url = `${environment.apiUrl}/users/login`
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map(this.getUser))
  }

  getCurrentUser(): Observable<CurrentUserInterface> {
    const url = `${environment.apiUrl}/user`
    return this.http.get<AuthResponseInterface>(url).pipe(map(this.getUser))
  }

  updateCurrentUser(
    currentUserInput: CurrentUserInputInterface
  ): Observable<CurrentUserInterface> {
    const url = `${environment.apiUrl}/user`
    return this.http
      .put<AuthResponseInterface>(url, currentUserInput)
      .pipe(map(this.getUser))
  }
}
