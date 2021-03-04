import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { MedicineRegisterRequest } from '../models/api/requests/medicine-register-request';
import { MedicineRegisterResponse } from '../models/api/responses/medicine-register-response';
import { Medicine } from '../models/medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private readonly http: HttpClient) { }

  registerMedicine(medicineRegisterRequest: MedicineRegisterRequest): Observable<MedicineRegisterResponse> {
    return this.http.post<MedicineRegisterResponse>(`${environment.api.baseUrlV1}/medicines`, medicineRegisterRequest);
  }

  getMedicines(pageNumber: number): Observable<Medicine[]> {
    return this.http.get<any>(`${environment.api.baseUrlV1}/medicines?pageNumber=${pageNumber || 1}`).pipe(
      map(medicineResponse => {
        return medicineResponse.results;
      })
    );
  }

  deleteMedicine(medicineId: number): Observable<any> {
    return this.http.delete(`${environment.api.baseUrlV1}/medicines/${medicineId}`);
  }
}
