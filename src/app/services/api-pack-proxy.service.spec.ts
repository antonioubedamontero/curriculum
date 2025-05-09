import { TestBed } from '@angular/core/testing';

import { of } from 'rxjs';

import { ApiPathProxyService } from './api-path-proxy.service';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { apiPathOrchestratorMock } from '../mocks/data/api-path-orchestrator.mock';

describe('ApiPathProxyService', () => {
  let service: ApiPathProxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(withFetch())],
    });
    service = TestBed.inject(ApiPathProxyService);

    spyOn(service['http'], 'get').and.returnValue(of(apiPathOrchestratorMock));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should throw an error when api path language is wrong', (done) => {
    const lang = 'jp';
    service.getAPIPath('summary', lang).subscribe({
      next: () => done(),
      error: (error) => {
        expect(error).toBeTruthy();
        done();
      },
    });
  });

  it('should throw an error when api path collection is wrong', (done) => {
    const lang = 'es';
    service.getAPIPath('books', lang).subscribe({
      next: () => done(),
      error: (error) => {
        expect(error).toBeTruthy();
        done();
      },
    });
  });

  it('should throw an error if api path was not loaded and tries to get api path url', () => {
    try {
      service['getApiPathUrl']('summary', 'es');
    } catch (error) {
      expect(error).toBeTruthy();
    }
  });

  it('should get api path url of collection when no api path orchestrator was loaded before', (done) => {
    service.getAPIPath('summary', 'es').subscribe((resp) => {
      expect(resp).toBe('https://miapiurl/summary.json');
      done();
    });
  });

  it('should get api path url of collection when api path orchestrator was loaded before', (done) => {
    service.loadApiPathsFromApi().subscribe(() => {
      service.getAPIPath('summary', 'es').subscribe((resp) => {
        expect(resp).toBe('https://miapiurl/summary.json');
        done();
      });
    });
  });
});
