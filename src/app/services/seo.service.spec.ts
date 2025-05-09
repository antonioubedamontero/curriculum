import { TestBed } from '@angular/core/testing';

import { of } from 'rxjs';

import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ApiPathProxyService } from './api-path-proxy.service';
import { TranslateModule } from '@ngx-translate/core';
import { SeoService } from './seo.service';
import { seoMock } from '../mocks/data/seo-response.mock';

describe('SeoService', () => {
  let service: SeoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        ApiPathProxyService,
      ],
      imports: [TranslateModule.forRoot()],
    });
    service = TestBed.inject(SeoService);
    TestBed.inject(ApiPathProxyService);

    spyOn(service['apiPathProxyService'], 'getAPIPath').and.returnValue(
      of('mocked/api/path')
    );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve SEO data from endpoint', (done) => {
    spyOn(service['http'], 'get').and.returnValue(of(seoMock));
    service.getSeo('es').subscribe((resp) => {
      expect(resp).toBeTruthy();
      done();
    });
  });

  it('should set seo data from endpoint', (done) => {
    spyOn(service['http'], 'get').and.returnValue(of(seoMock));
    service.getSeo('es').subscribe((seo) => {
      service.setSEO('es');
      expect(seo).toBeTruthy();
      done();
    });
  });
});
