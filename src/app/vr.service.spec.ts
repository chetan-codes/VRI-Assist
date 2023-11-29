import { TestBed } from '@angular/core/testing';

import { VRService } from './vr.service';

describe('VRService', () => {
  let service: VRService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VRService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
