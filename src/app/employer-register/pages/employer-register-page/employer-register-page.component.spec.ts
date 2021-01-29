import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerRegisterPageComponent } from './employer-register-page.component';

describe('EmployerRegisterPageComponent', () => {
  let component: EmployerRegisterPageComponent;
  let fixture: ComponentFixture<EmployerRegisterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerRegisterPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerRegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
