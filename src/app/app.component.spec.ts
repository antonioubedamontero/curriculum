import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterTestingHarness } from '@angular/router/testing';

import { provideTranslateService, TranslateLoader } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { CustomTranslateService } from './services/custom-translate.service';
import { CustomTranslateMockService } from './mocks/services/custom-translate-mock.service';
import { httpLoaderFactory } from './app.config';
import { provideRouter } from '@angular/router';
import { By } from '@angular/platform-browser';

@Component({
  imports: [],
  template: `<p>Curriculum mock component</p>`,
})
export class CurriculumMockComponent {}

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        {
          provide: CustomTranslateService,
          useClass: CustomTranslateMockService,
        },
        provideRouter([
          { path: '', component: CurriculumMockComponent },
          { path: ':lang/web-developer', component: CurriculumMockComponent },
          { path: '**', redirectTo: '' },
        ]),
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
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have a router-outlet', () => {
    const routerOutlet = fixture.nativeElement.querySelector('router-outlet');
    expect(routerOutlet).toBeTruthy();
  });

  describe('- should navigae to curriculum page', () => {
    it('should navigate to Curriculum home page', (done) => {
      RouterTestingHarness.create().then((harness) => {
        harnesNavigateTo(harness, '', done);
      });
    });

    it('should navigate to Spanish Curriculum', (done) => {
      RouterTestingHarness.create().then((harness) => {
        harnesNavigateTo(harness, '/es/web/developer', done);
      });
    });

    it('should navigate to English Curriculum', (done) => {
      RouterTestingHarness.create().then((harness) => {
        harnesNavigateTo(harness, '/en/web/developer', done);
      });
    });
  });
});

function harnesNavigateTo(
  harness: RouterTestingHarness,
  url: string,
  done: DoneFn
) {
  harness.navigateByUrl(url).then(() => {
    const element = harness.fixture.debugElement.query(
      By.css('p')
    ).nativeElement;
    expect(element.textContent).toBe('Curriculum mock component');
    done();
  });
}
