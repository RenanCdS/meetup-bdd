import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SessionService } from 'src/app/shared/services/session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private readonly sessionService: SessionService,
            private readonly router: Router) {
  }

  canActivate(): boolean {
    const authToken = this.sessionService.authToken;
    if (!authToken) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
