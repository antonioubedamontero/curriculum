import { ComponentFixture, TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

import {
  provideTranslateService,
  TranslateLoader,
  TranslatePipe,
} from '@ngx-translate/core';

import { HeaderComponent } from './header.component';
import { identificationResponseMock } from '../../mocks/data/identification-response.mock';
import { CustomTranslateService } from '../../services/custom-translate.service';
import { CustomTranslateMockService } from '../../mocks/services/custom-translate-mock.service';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { httpLoaderFactory } from '../../app.config';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatIconModule, TranslatePipe],
      providers: [
        Router,
        provideHttpClient(withFetch()),
        provideTranslateService({
          loader: {
            provide: TranslateLoader,
            useFactory: httpLoaderFactory,
            deps: [HttpClient],
          },
        }),
        {
          provide: CustomTranslateService,
          useClass: CustomTranslateMockService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;

    (component as any)['identificationResponse'] = signal(
      identificationResponseMock
    );

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a header with name and surname and a role in HTML', () => {
    const htmlHeader = fixture.nativeElement.querySelector('header');
    expect(htmlHeader).toBeTruthy();

    expect(component.nameAndSurname).toBeTruthy();
    expect(component.role).toBeTruthy();

    const htmlNameAndSurname = fixture.nativeElement.querySelector(
      '.header-data__name-and-surname'
    );
    expect(htmlNameAndSurname).toBeTruthy();

    const htmlRole = fixture.nativeElement.querySelector('.header-data__role');
    expect(htmlRole).toBeTruthy();
  });

  it('should change language', () => {
    component.changeLanguage('en');
    expect(component['customTranslateService'].currentLang()).toBe('en');
  });
});
