import { TestBed } from '@angular/core/testing';

import { of } from 'rxjs';

import { MainService } from './main.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ApiPathProxyService } from './api-path-proxy.service';
import { TranslateModule } from '@ngx-translate/core';

import {
  habilitiesResponseMock,
  languagesResponseMock,
  summaryResponseMock,
  trainingsResponseMock,
  workExperiencesResponseMock,
} from '../mocks/data/main-response.mock';
import { personalProjectsResponseMock } from '../mocks/data/personal-project-response.mock';

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
      of('mocked/api/path')
    );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get habilities from endpoint', (done) => {
    spyOn(service['http'], 'get').and.returnValue(of(habilitiesResponseMock));
    service.getHabilities('es').subscribe((resp) => {
      expect(resp).toBeTruthy();
      done();
    });
  });

  it('should get languages from endpoint', (done) => {
    spyOn(service['http'], 'get').and.returnValue(of(languagesResponseMock));
    service.getLanguages('es').subscribe((resp) => {
      expect(resp).toBeTruthy();
      done();
    });
  });

  it('should get developer work experience from endpoint', (done) => {
    spyOn(service['http'], 'get').and.returnValue(
      of(workExperiencesResponseMock)
    );
    service.getDeveloperWorkExperiences('es').subscribe((resp) => {
      expect(resp).toBeTruthy();
      done();
    });
  });

  it('should get summary from endpoint', (done) => {
    spyOn(service['http'], 'get').and.returnValue(of(summaryResponseMock));
    service.getSummary('es').subscribe((resp) => {
      expect(resp).toBeTruthy();
      done();
    });
  });

  it('should get trainings from endpoint', (done) => {
    spyOn(service['http'], 'get').and.returnValue(of(trainingsResponseMock));
    service.getTrainings('es').subscribe((resp) => {
      expect(resp).toBeTruthy();
      done();
    });
  });

  it('should get personal projects from endpoint', (done) => {
    spyOn(service['http'], 'get').and.returnValue(
      of(personalProjectsResponseMock)
    );
    service.getPersonalProjects('es').subscribe((resp) => {
      expect(resp).toBeTruthy();
      done();
    });
  });
});
