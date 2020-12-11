import { TestBed } from '@angular/core/testing';

import { StateResolverService } from './state-resolver.service';

describe('StateResolverService', () => {
  let service: StateResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
