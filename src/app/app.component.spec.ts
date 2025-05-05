import { TestBed } from '@angular/core/testing';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';

import { provideTranslateService, TranslateLoader } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { CustomTranslateService } from './services/custom-translate.service';
import { CustomTranslateMockService } from './mocks/services/custom-translate-mock.service';
import { httpLoaderFactory } from './app.config';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        {
          provide: CustomTranslateService,
          useClass: CustomTranslateMockService,
        },
        provideHttpClient(withFetch()),
        provideTranslateService({
          loader: {
            provide: TranslateLoader,
            useFactory: httpLoaderFactory,
            deps: [HttpClient],
          },
        }),
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
