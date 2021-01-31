import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { validationMessages } from './validation-messages';

@Component({
  selector: 'medicine-register-page',
  templateUrl: './medicine-register-page.component.html',
  styleUrls: ['./medicine-register-page.component.scss']
})
export class MedicineRegisterPageComponent implements OnInit, OnDestroy {

  registerMedicineFormSubscriptions: Subscription[] = [];
  registerMedicineForm: FormGroup;
  registerMedicineFormControls: { [key: string]: FormControl } = {
    name: this.fb.control('', [Validators.required, Validators.minLength(3)]),
    description: this.fb.control('', Validators.required),
    category: this.fb.control('', Validators.required),
    trackCode: this.fb.control('', Validators.required),
    date: this.fb.control('', Validators.required),
  };

  controlsErrorMessages = {
    name: '',
    description: '',
    category: '',
    trackCode: '',
    date: ''
  };

  constructor(private readonly fb: FormBuilder, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.registerMedicineForm = this.fb.group(this.registerMedicineFormControls);
    this.watchControls();
  }

  /**
   * @description método usado para "assistir" os valores dos controls e validá-los a cada nova interação
   */
  watchControls(): void {
    const controlsArray = Object.keys(this.registerMedicineFormControls);

    controlsArray.forEach(controlName => {
      this.registerMedicineFormSubscriptions.push(this.registerMedicineFormControls[controlName].valueChanges.pipe(
        debounceTime(300)
      ).subscribe(() => {
        this.setMessage(this.registerMedicineFormControls[controlName], controlName);
      }));
    })
  }

  setMessage(control: AbstractControl, controlName: string): void {
    this.controlsErrorMessages[controlName] = '';
    if ((control.touched || control.dirty) && control.errors) {
      const controlErrors = Object.keys(control.errors);
      this.controlsErrorMessages[controlName] =
        validationMessages[controlName][controlErrors.pop()];
    }
    control.updateValueAndValidity();
  }

  registerMedicine(): void {
    if (!this.registerMedicineForm.valid) {
      this.registerMedicineForm.markAllAsTouched();
      this.validateControls();
      return;
    }
    this.snackBar.open('medicamento cadastrado com sucesso!', '', {
      duration: 3000
    });
    this.registerMedicineForm.reset();
    this.registerMedicineForm.updateValueAndValidity();
  }

  private validateControls(): void {
    const controlsArray = Object.keys(this.registerMedicineFormControls);
    controlsArray.forEach(controlName => {
      this.setMessage(this.registerMedicineFormControls[controlName], controlName);
    });
    this.registerMedicineForm.updateValueAndValidity();
  }

  ngOnDestroy(): void {
    if (this.registerMedicineFormSubscriptions && this.registerMedicineFormSubscriptions.length) {
      this.registerMedicineFormSubscriptions.forEach(sub => {
        sub.unsubscribe();
      });
    }
  }
}
