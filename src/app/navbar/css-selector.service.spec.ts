import { TestBed } from '@angular/core/testing';

import { CssSelectorService } from './css-selector.service';

describe('CssSelectorService', () => {
  let service: CssSelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CssSelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
