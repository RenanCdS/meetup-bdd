import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineEditPageComponent } from './medicine-edit-page.component';

describe('MedicineEditPageComponent', () => {
  let component: MedicineEditPageComponent;
  let fixture: ComponentFixture<MedicineEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicineEditPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
