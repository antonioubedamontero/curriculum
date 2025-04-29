import { TestBed } from '@angular/core/testing';

import { CustomTranslateService } from './custom-translate.service';
import { TranslateModule } from '@ngx-translate/core';

describe('IdentificationService', () => {
  let service: CustomTranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
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
