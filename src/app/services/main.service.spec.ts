import { TestBed } from '@angular/core/testing';

import { MainService } from './main.service';
import { CustomTranslateService } from './custom-translate.service';
import { CustomTranslateMockService } from '../mocks/services/custom-translate-mock.service';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('MainService', () => {
  let service: MainService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: CustomTranslateService,
          useClass: CustomTranslateMockService,
        },
        provideHttpClient(withFetch()),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(MainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('should retrieve data when request data from endpoints', () => {
    describe('should retrieve data when request data from endpoints', () => {
      it('should retrieve data when call to get habilities endpoint', () => {
        service['customTranslateService'].currentLang.set('es');
        expect(service.getHabilities()).toBeTruthy();
        service['customTranslateService'].currentLang.set('en');
        expect(service.getHabilities()).toBeTruthy();
      });

      it('should retrieve data when call to get languages endpoint', () => {
        service['customTranslateService'].currentLang.set('es');
        expect(service.getLanguages()).toBeTruthy();
        service['customTranslateService'].currentLang.set('en');
        expect(service.getLanguages()).toBeTruthy();
      });

      it('should retrieve data when call to get practice developer work experiences endpoint', () => {
        service['customTranslateService'].currentLang.set('es');
        expect(service.getDeveloperWorkExperiences()).toBeTruthy();
        service['customTranslateService'].currentLang.set('en');
        expect(service.getDeveloperWorkExperiences()).toBeTruthy();
      });

      it('should retrieve data when call to get summary endpoint', () => {
        service['customTranslateService'].currentLang.set('es');
        expect(service.getSummary()).toBeTruthy();
        service['customTranslateService'].currentLang.set('en');
        expect(service.getSummary()).toBeTruthy();
      });

      it('should retrieve data when call to get trainings endpoint', () => {
        service['customTranslateService'].currentLang.set('es');
        expect(service.getTrainings()).toBeTruthy();
        service['customTranslateService'].currentLang.set('en');
        expect(service.getTrainings()).toBeTruthy();
      });
    });
  });
});
