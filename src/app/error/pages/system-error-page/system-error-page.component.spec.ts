import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemErrorPageComponent } from './system-error-page.component';

describe('SystemErrorPageComponent', () => {
  let component: SystemErrorPageComponent;
  let fixture: ComponentFixture<SystemErrorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemErrorPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemErrorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
