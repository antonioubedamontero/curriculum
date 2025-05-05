import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { IdentificationService } from './identification.service';
import { ApiPathProxyService } from './api-path-proxy.service';
import { TranslateModule } from '@ngx-translate/core';

describe('IdentificationService', () => {
  let service: IdentificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        ApiPathProxyService,
      ],
      imports: [TranslateModule.forRoot()],
    });
    TestBed.inject(ApiPathProxyService);
    service = TestBed.inject(IdentificationService);

    spyOn(service['apiPathProxyService'], 'getAPIPath').and.returnValue(
      'mocked/api/path'
    );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return data when getIdentificationMethod is called', () => {
    expect(service.getIdentification('es')).toBeTruthy();
  });
});
