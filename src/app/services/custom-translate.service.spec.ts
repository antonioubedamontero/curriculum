import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { TranslateService } from '@ngx-translate/core';

import { CustomTranslateService } from './custom-translate.service';
import { TranslateMockService } from '../mocks/services/translate-service.mock';
import { SeoService } from './seo.service';
import { SeoMockService } from '../mocks/services/seo-service.mock';
import { defaultLang } from '../interfaces/langs';

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
    service.initTranslations();
    expect(service['currentLang']()).toBe('es');
  });

  it('should change translations', () => {
    service.changeLanguage('en');
    expect(service['currentLang']()).toBe('en');
  });

  it('should change translations to a non permitted value', () => {
    expect(service.changeLanguage('jp'));
    expect(service['currentLang']()).toBe(defaultLang);
  });
});
