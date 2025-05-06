import { TestBed } from '@angular/core/testing';

import { ApiPathProxyService } from './api-path-proxy.service';

describe('ApiPathProxyService', () => {
  let service: ApiPathProxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPathProxyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should init translations', () => {
    expect(service.getAPIPath('summary', 'es')).toBeTruthy();
  });
});
