import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorAssessmentComponent } from './motor-assessment.component';

describe('MotorAssesmentComponent', () => {
  let component: MotorAssessmentComponent;
  let fixture: ComponentFixture<MotorAssessmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MotorAssessmentComponent]
    });
    fixture = TestBed.createComponent(MotorAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
