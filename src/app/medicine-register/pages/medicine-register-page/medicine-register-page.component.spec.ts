import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineRegisterPageComponent } from './medicine-register-page.component';

describe('MedicineRegisterPageComponent', () => {
  let component: MedicineRegisterPageComponent;
  let fixture: ComponentFixture<MedicineRegisterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicineRegisterPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineRegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
