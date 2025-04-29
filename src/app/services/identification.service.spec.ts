import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { IdentificationService } from './identification.service';
import { ApiPathProxyService } from './api-path-proxy.service';

describe('IdentificationService', () => {
  let service: IdentificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    TestBed.inject(ApiPathProxyService);
    service = TestBed.inject(IdentificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return data when getIdentificationMethod is called', () => {
    expect(service.getIdentification()).toBeTruthy();
  });
});
