import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrAddAdminsComponent } from './fr-add-admins.component';

describe('FrAddAdminsComponent', () => {
  let component: FrAddAdminsComponent;
  let fixture: ComponentFixture<FrAddAdminsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrAddAdminsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrAddAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
