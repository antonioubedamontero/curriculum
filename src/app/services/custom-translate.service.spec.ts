import { TestBed } from '@angular/core/testing';

import { TranslateService } from '@ngx-translate/core';

import { TranslateServiceMock } from '../mocks/services/translate-mock.service';
import { CustomTranslateService } from './custom-translate.service';

describe('IdentificationService', () => {
  let service: CustomTranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: TranslateService, useClass: TranslateServiceMock },
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
