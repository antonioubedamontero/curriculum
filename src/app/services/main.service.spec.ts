import { TestBed } from '@angular/core/testing';

import { MainService } from './main.service';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ApiPathProxyService } from './api-path-proxy.service';

describe('MainService', () => {
  let service: MainService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(withFetch()), provideHttpClientTesting()],
    });
    service = TestBed.inject(MainService);
    TestBed.inject(ApiPathProxyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('should retrieve data when request data from endpoints', () => {
    describe('should retrieve data when request data from endpoints', () => {
      it('should retrieve data when call to get habilities endpoint', () => {
        expect(service.getHabilities()).toBeTruthy();
      });

      it('should retrieve data when call to get languages endpoint', () => {
        expect(service.getLanguages()).toBeTruthy();
      });

      it('should retrieve data when call to get practice developer work experiences endpoint', () => {
        expect(service.getDeveloperWorkExperiences()).toBeTruthy();
      });

      it('should retrieve data when call to get summary endpoint', () => {
        expect(service.getSummary()).toBeTruthy();
      });

      it('should retrieve data when call to get trainings endpoint', () => {
        expect(service.getTrainings()).toBeTruthy();
      });
    });
  });
});
