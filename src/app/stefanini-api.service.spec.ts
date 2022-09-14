import { TestBed } from '@angular/core/testing';

import { StefaniniApiService } from './stefanini-api.service';

describe('StefaniniApiService', () => {
  let service: StefaniniApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StefaniniApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
