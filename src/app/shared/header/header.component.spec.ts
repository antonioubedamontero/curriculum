import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentRef } from '@angular/core';
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
  let componentRef: ComponentRef<HeaderComponent>;
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
    componentRef = fixture.componentRef;

    componentRef.setInput('identificationResponse', identificationResponseMock);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get name and surname, and role', () => {
    expect(component.nameAndSurname()).toBe('mock-name mock-surname');
    expect(component.role()).toBe('mock role');
  });

  it('should render a header with name and surname and a role', () => {
    const htmlHeader = fixture.nativeElement.querySelector('header');
    expect(htmlHeader).toBeTruthy();

    const htmlNameAndSurnameContainer: HTMLElement =
      fixture.nativeElement.querySelector('.header-data__name-and-surname');

    expect(htmlNameAndSurnameContainer.innerHTML).toBe(
      'mock-name mock-surname'
    );

    const htmlRoleContainer: HTMLElement = fixture.nativeElement.querySelector(
      '.header-data__role em'
    );
    expect(htmlRoleContainer.innerHTML).toBe('mock role');
  });

  it('should render a language selector', () => {
    const htmlLanguageSelector: HTMLElement =
      fixture.nativeElement.querySelector('.language-selector');
    expect(htmlLanguageSelector).toBeTruthy();
  });

  it('should change language', () => {
    component.changeLanguage('en');
    expect(component['customTranslateService'].currentLang()).toBe('en');
  });
});
