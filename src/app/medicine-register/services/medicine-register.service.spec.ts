import { TestBed } from '@angular/core/testing';

import { MedicineRegisterService } from './medicine-register.service';

describe('MedicineRegisterService', () => {
  let service: MedicineRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicineRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
