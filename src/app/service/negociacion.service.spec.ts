import { TestBed } from '@angular/core/testing';

import { NegociacionService } from './negociacion.service';

describe('NegociacionService', () => {
  let service: NegociacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NegociacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
