import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private readonly snackBar: MatSnackBar) { }

  showMessage(message: string, duration?: number): void {
    this.snackBar.open(message, 'Fechar', {
      duration: duration || 3000,
      panelClass: 'black'
    });
  }
}
