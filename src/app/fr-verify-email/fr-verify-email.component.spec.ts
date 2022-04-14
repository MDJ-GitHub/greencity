import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrVerifyEmailComponent } from './fr-verify-email.component';

describe('FrVerifyEmailComponent', () => {
  let component: FrVerifyEmailComponent;
  let fixture: ComponentFixture<FrVerifyEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrVerifyEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrVerifyEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
