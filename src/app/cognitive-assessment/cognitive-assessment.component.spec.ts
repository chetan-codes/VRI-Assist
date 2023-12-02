import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CognitiveAssessmentComponent } from './cognitive-assesment.component';

describe('CognitiveAssesmentComponent', () => {
  let component: CognitiveAssessmentComponent;
  let fixture: ComponentFixture<CognitiveAssessmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CognitiveAssessmentComponent]
    });
    fixture = TestBed.createComponent(CognitiveAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
