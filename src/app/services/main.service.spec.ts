import { TestBed } from '@angular/core/testing';

import { MainService } from './main.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ApiPathProxyService } from './api-path-proxy.service';
import { TranslateModule } from '@ngx-translate/core';

describe('MainService', () => {
  let service: MainService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        ApiPathProxyService,
      ],
      imports: [TranslateModule.forRoot()],
    });
    service = TestBed.inject(MainService);
    TestBed.inject(ApiPathProxyService);

    spyOn(service['apiPathProxyService'], 'getAPIPath').and.returnValue(
      'mocked/api/path'
    );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('should retrieve data when request data from endpoints', () => {
    describe('should retrieve data when request data from endpoints', () => {
      it('should retrieve data when call to get habilities endpoint', () => {
        expect(service.getHabilities('es')).toBeTruthy();
      });

      it('should retrieve data when call to get languages endpoint', () => {
        expect(service.getLanguages('es')).toBeTruthy();
      });

      it('should retrieve data when call to get practice developer work experiences endpoint', () => {
        expect(service.getDeveloperWorkExperiences('es')).toBeTruthy();
      });

      it('should retrieve data when call to get summary endpoint', () => {
        expect(service.getSummary('es')).toBeTruthy();
      });

      it('should retrieve data when call to get trainings endpoint', () => {
        expect(service.getTrainings('es')).toBeTruthy();
      });
    });
  });
});
