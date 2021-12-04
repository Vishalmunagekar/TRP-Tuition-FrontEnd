import { TestBed } from '@angular/core/testing';

import { AppSessionStorageService } from './app-session-storage.service';

describe('AppSessionStorageService', () => {
  let service: AppSessionStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppSessionStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
