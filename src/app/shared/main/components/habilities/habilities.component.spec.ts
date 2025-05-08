import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { TranslateModule } from '@ngx-translate/core';

import { MainService } from '../../../../services/main.service';
import { MainMockService } from '../../../../mocks/services/main-mock.service';
import { HabilitiesComponent } from './habilities.component';
import { ComponentRef } from '@angular/core';

describe('HabilitiesComponent', () => {
  let component: HabilitiesComponent;
  let componentRef: ComponentRef<HabilitiesComponent>;
  let fixture: ComponentFixture<HabilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HabilitiesComponent, MatIconModule, TranslateModule.forRoot()],
      providers: [
        provideHttpClient(withFetch()),
        provideHttpClientTesting,
        {
          provide: MainService,
          useClass: MainMockService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HabilitiesComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;

    componentRef.setInput('lang', 'es');

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should get habilities from api', () => {
    expect(
      component.habilitiesResource.value()?.habilities.length
    ).toBeGreaterThan(0);
  });

  it('should render habilities section title', (done) => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const htmlHabilitiesTitle = fixture.nativeElement.querySelector(
        '.habilities-text-title'
      );
      expect(htmlHabilitiesTitle).toBeTruthy();
      expect(htmlHabilitiesTitle.textContent).toBe('main.habilities.title');
      done();
    });
  });

  it('should render a list with each hability', (done) => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const htmlhabilityList: HTMLElement =
        fixture.nativeElement.querySelector('.habilities-list');
      expect(htmlhabilityList).toBeTruthy();

      const htmlListItems = htmlhabilityList.querySelectorAll('li');
      const habilitiesListItems =
        component.habilitiesResource.value()?.habilities;

      expect(habilitiesListItems?.length).toBe(htmlListItems.length);

      htmlListItems.forEach((htmlLiElement) => {
        expect(htmlLiElement.innerText).toBeTruthy();
      });

      done();
    });
  });
});
