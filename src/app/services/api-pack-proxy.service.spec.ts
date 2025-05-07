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

  it('should get api path url of collection', (done) => {
    service.getAPIPath('summary', 'es').subscribe((resp) => {
      expect(resp).toBe('https://miapiurl/summary.json');
      done();
    });
  });
});
