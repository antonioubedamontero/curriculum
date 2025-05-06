import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { TranslateService } from '@ngx-translate/core';

import { CustomTranslateService } from './custom-translate.service';
import { TranslateMockService } from '../mocks/services/translate-service.mock';
import { SeoService } from './seo.service';
import { SeoMockService } from '../mocks/services/seo-service.mock';

describe('CustomTranslateService', () => {
  let service: CustomTranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: TranslateService, useClass: TranslateMockService },
        { provide: SeoService, useClass: SeoMockService },
      ],
    });
    service = TestBed.inject(CustomTranslateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should init translations', () => {
    expect(service.initTranslations()).toBeUndefined();
  });

  it('should change translations', () => {
    expect(service.changeLanguage('en')).toBeUndefined();
  });

  it('should change translations to a non permitted value', () => {
    expect(service.changeLanguage('jp')).toBeUndefined();
  });
});
