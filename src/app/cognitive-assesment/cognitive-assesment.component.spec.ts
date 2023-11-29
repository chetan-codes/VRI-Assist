import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CognitiveAssesmentComponent } from './cognitive-assesment.component';

describe('CognitiveAssesmentComponent', () => {
  let component: CognitiveAssesmentComponent;
  let fixture: ComponentFixture<CognitiveAssesmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CognitiveAssesmentComponent]
    });
    fixture = TestBed.createComponent(CognitiveAssesmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
