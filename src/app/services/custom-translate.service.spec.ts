import { TestBed } from '@angular/core/testing';
import { Meta, Title } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { TranslateService } from '@ngx-translate/core';

import { CustomTranslateService } from './custom-translate.service';
import { TitleMockService } from '../mocks/services/title-service.mock';
import { MetaMockService } from '../mocks/services/meta-service.mock';
import { TranslateMockService } from '../mocks/services/translate-service.mock';

describe('CustomTranslateService', () => {
  let service: CustomTranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: TranslateService, useClass: TranslateMockService },
        { provide: Title, useClass: TitleMockService },
        { provide: Meta, useClass: MetaMockService },
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
    expect(service.chageLanguage('en')).toBeUndefined();
  });

  it('should change translations to a non permitted value', () => {
    expect(service.chageLanguage('jp')).toBeUndefined();
  });
});
