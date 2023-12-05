import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticalReportComponent } from './analytical-report.component';

describe('AnalyticalReportComponent', () => {
  let component: AnalyticalReportComponent;
  let fixture: ComponentFixture<AnalyticalReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnalyticalReportComponent]
    });
    fixture = TestBed.createComponent(AnalyticalReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
