import { TestBed } from '@angular/core/testing';

import { HomeDetailsService } from './home-details.service';

describe('HomeDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeDetailsService = TestBed.get(HomeDetailsService);
    expect(service).toBeTruthy();
  });
});
