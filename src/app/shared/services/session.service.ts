import { Injectable } from '@angular/core';
import { SESSION_STORAGE_TOKEN_KEY } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  get authToken(): string {
    return sessionStorage.getItem(SESSION_STORAGE_TOKEN_KEY);
  }

  set authToken(token: string) {
    sessionStorage.setItem(SESSION_STORAGE_TOKEN_KEY, token);
  }
}
