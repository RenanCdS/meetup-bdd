import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginRequest } from '../models/api/login-request';
import { LoginResponse } from '../models/api/login-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly http: HttpClient) { }

  login(loginRequest: LoginRequest): Observable<LoginResponse> {
      return this.http.post<LoginResponse>(`${environment.api.baseUrlV1}/login`, loginRequest);
  }
}
