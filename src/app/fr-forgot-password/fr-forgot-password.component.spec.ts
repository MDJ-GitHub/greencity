import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrForgotPasswordComponent } from './fr-forgot-password.component';

describe('FrForgotPasswordComponent', () => {
  let component: FrForgotPasswordComponent;
  let fixture: ComponentFixture<FrForgotPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrForgotPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
