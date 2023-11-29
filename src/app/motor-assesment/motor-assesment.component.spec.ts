import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorAssesmentComponent } from './motor-assesment.component';

describe('MotorAssesmentComponent', () => {
  let component: MotorAssesmentComponent;
  let fixture: ComponentFixture<MotorAssesmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MotorAssesmentComponent]
    });
    fixture = TestBed.createComponent(MotorAssesmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
