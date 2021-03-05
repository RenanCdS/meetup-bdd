import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Medicine } from 'src/app/core/models/medicine';
import { MedicineService } from 'src/app/core/services/medicine.service';
import { MedicineStore } from 'src/app/core/stores/medicine.store';
import { validationMessages } from 'src/app/medicine-register/pages/medicine-register-page/validation-messages';

@Component({
  selector: 'medicine-edit-page',
  templateUrl: './medicine-edit-page.component.html',
  styleUrls: ['./medicine-edit-page.component.scss']
})
export class MedicineEditPageComponent implements OnInit {

  updateMedicineForm: FormGroup;
  updateMedicineFormControls: { [key: string]: FormControl } = {
    name: this.formBuilder.control('', [Validators.required, Validators.minLength(3)]),
    description: this.formBuilder.control('', Validators.required),
    category: this.formBuilder.control('', Validators.required),
    trackCode: this.formBuilder.control('', Validators.required),
    date: this.formBuilder.control('', Validators.required),
  };

  updateMedicineControlsSubscriptions: Subscription[] = [];

  controlsErrorMessages = {
    name: '',
    description: '',
    category: '',
    trackCode: '',
    date: ''
  };

  constructor(private readonly formBuilder: FormBuilder,
              private readonly route: ActivatedRoute,
              private readonly medicineStore: MedicineStore,
              private readonly medicineService: MedicineService,
              private readonly snackBar: MatSnackBar,
              private readonly router: Router) { }

  ngOnInit(): void {
    this.updateMedicineForm = this.formBuilder.group(this.updateMedicineFormControls);
    this.medicineStore.medicineList$.subscribe({
      next: (medicineList) => {
        const medicineToEdit = medicineList.find((medicine) => medicine.medicineId === +this.route.snapshot.paramMap.get('id'));
        this.updateMedicineForm.setValue({
          name: medicineToEdit.medicineName,
          description: medicineToEdit.medicineDescription,
          category: medicineToEdit.medicineCategory,
          trackCode: medicineToEdit.trackCode,
          date: '05-03-2021'
        });
        this.updateMedicineForm.updateValueAndValidity();
      }
    });
    this.watchControls();
  }

 private watchControls(): void {
    const controlsArray = Object.keys(this.updateMedicineFormControls);

    controlsArray.forEach(controlName => {
      this.updateMedicineControlsSubscriptions.push(this.updateMedicineFormControls[controlName].valueChanges.pipe(
        debounceTime(300)
      ).subscribe(() => {
        this.setMessage(this.updateMedicineFormControls[controlName], controlName);
      }));
    })
  }

  updateMedicine(): void {
    const medicineToUpdate: Medicine = {
      medicineId: +this.route.snapshot.paramMap.get('id'),
      medicineName: this.updateMedicineForm.get('name').value,
      medicineDescription: this.updateMedicineForm.get('description').value,
      medicineCategory: this.updateMedicineForm.get('category').value,
      trackCode: this.updateMedicineForm.get('trackCode').value,
      dueDate: this.updateMedicineForm.get('date').value
    };

    this.medicineService.updateMedicine(medicineToUpdate).subscribe({
      next: () => {
        this.snackBar.open('alterado com sucesso', '', {
          duration: 2000
        });
        const medicineToUpdateIndex = this.medicineStore.medicineListSubject.getValue()
                          .findIndex(medicine => medicine.medicineId === +this.route.snapshot.paramMap.get('id'));
        const updatedList = this.medicineStore.medicineListSubject.getValue();
        updatedList.splice(medicineToUpdateIndex, 1, medicineToUpdate);
        this.medicineStore.medicineListSubject.next(updatedList);
        this.router.navigate(['/medicamentos']);
      },
      error: () => {
        this.snackBar.open('erro ao alterar', '', {
          duration: 2000
        });
      }
    });
  }

  private setMessage(control: AbstractControl, controlName: string): void {
    this.controlsErrorMessages[controlName] = '';
    if ((control.touched || control.dirty) && control.errors) {
      const controlErrors = Object.keys(control.errors);
      this.controlsErrorMessages[controlName] =
        validationMessages[controlName][controlErrors.pop()];
    }
    control.updateValueAndValidity();
  }

  ngOnDestroy(): void {
    if (this.updateMedicineControlsSubscriptions && this.updateMedicineControlsSubscriptions.length) {
      this.updateMedicineControlsSubscriptions.forEach(sub => {
        sub.unsubscribe();
      });
    }
  }

}
