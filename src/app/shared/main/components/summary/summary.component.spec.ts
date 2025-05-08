import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentRef } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { SummaryComponent } from './summary.component';
import { MainService } from '../../../../services/main.service';
import { MainMockService } from '../../../../mocks/services/main-mock.service';

describe('SummaryComponent', () => {
  let component: SummaryComponent;
  let componentRef: ComponentRef<SummaryComponent>;
  let fixture: ComponentFixture<SummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummaryComponent, MatIconModule, TranslateModule.forRoot()],
      providers: [
        provideHttpClient(withFetch()),
        provideHttpClientTesting,
        {
          provide: MainService,
          useClass: MainMockService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SummaryComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;

    componentRef.setInput('lang', 'es');

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should get summary from api', () => {
    const summary = component.summaryResource.value()?.summary;
    expect(summary?.length).toBeGreaterThan(0);
  });

  it('should render a summary text', (done) => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const htmlSummary: HTMLElement =
        fixture.nativeElement.querySelector('.summary__text');
      expect(htmlSummary).toBeTruthy();
      expect(component.summaryResource.value()?.summary).toBeTruthy();
      done();
    });
  });

  it('should render a summary section title', (done) => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const htmlSummaryTitle: HTMLElement = fixture.nativeElement.querySelector(
        '.summary-title-text'
      );
      expect(htmlSummaryTitle).toBeTruthy();
      expect(htmlSummaryTitle.textContent).toBe('main.summary.title');
      done();
    });
  });
});
