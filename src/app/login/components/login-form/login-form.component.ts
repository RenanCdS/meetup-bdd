import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { LoginRequest } from 'src/app/core/models/api/login-request';
import { LoginResponse } from 'src/app/core/models/api/login-response';
import { AuthService } from 'src/app/core/services/auth.service';
import { UtilsService } from 'src/app/core/services/utils.service';
import { SessionService } from 'src/app/shared/services/session.service';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly sessionService: SessionService,
    private readonly authService: AuthService,
    private readonly utilsService: UtilsService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  login(): void {
    if (!this.loginForm.valid) {
      this.loginForm.markAllAsTouched();
      this.loginForm.updateValueAndValidity();
      return;
    }

    const loginRequest: LoginRequest = {
      email: this.loginForm.controls.email.value,
      password: this.loginForm.controls.password.value
    };

    this.authService.login(loginRequest).pipe(
      catchError(() => {
        this.utilsService.showMessage('e-mail ou senha inválidos.');
        return EMPTY;
      }),
      map((loginResponse: LoginResponse) => {
        return loginResponse.token;
      })
    ).subscribe({
      next: token => {
        this.sessionService.authToken = token;
        this.router.navigate(['/home']);
      },
      complete: () => {
        this.loginForm.reset();
        this.loginForm.updateValueAndValidity();
      }
    })
  }
}
