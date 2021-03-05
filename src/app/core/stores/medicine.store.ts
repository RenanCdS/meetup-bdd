import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Medicine } from '../models/medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineStore {

  medicineListSubject: BehaviorSubject<Medicine[]> = new BehaviorSubject([]);
  medicineList$: Observable<Medicine[]>;

  constructor() {
    this.medicineList$ = this.medicineListSubject.asObservable();
  }
}
