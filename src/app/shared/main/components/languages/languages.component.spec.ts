import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { TranslateModule } from '@ngx-translate/core';

import { MainService } from '../../../../services/main.service';
import { MainMockService } from '../../../../mocks/services/main-mock.service';
import { LanguagesComponent } from './languages.component';
import { ComponentRef } from '@angular/core';

describe('LanguagesComponent', () => {
  let component: LanguagesComponent;
  let componentRef: ComponentRef<LanguagesComponent>;
  let fixture: ComponentFixture<LanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguagesComponent, MatIconModule, TranslateModule.forRoot()],
      providers: [
        provideHttpClient(withFetch()),
        provideHttpClientTesting,
        {
          provide: MainService,
          useClass: MainMockService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LanguagesComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;

    componentRef.setInput('lang', 'es');

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should get languages from api', (done) => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(
        component.languageResource.value()?.languages.length
      ).toBeGreaterThan(0);
      done();
    });
  });

  it('should render a language title', (done) => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const htmlLanguageTitle: HTMLElement =
        fixture.nativeElement.querySelector('.language-section-title');
      expect(htmlLanguageTitle.innerHTML).toBe('main.languages.title');
      done();
    });
  });

  it('should render each language retrieved from api', (done) => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const htmlLanguageList: HTMLElement =
        fixture.nativeElement.querySelector('.languages-list');
      expect(htmlLanguageList).toBeTruthy();

      const htmlLanguageItems = htmlLanguageList.querySelectorAll('li');
      htmlLanguageItems.forEach((htmlLanguageItem) => {
        expect(htmlLanguageItem.innerHTML).toBeTruthy();
      });
      done();
    });
  });
});
