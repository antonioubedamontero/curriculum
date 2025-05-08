import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { Component, ComponentRef } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

@Component({
  selector: 'app-main-habilities',
  imports: [],
  template: `<p>Main-habilities</p>`,
})
export class HabilitiesMockComponent {}

@Component({
  selector: 'app-main-training',
  imports: [],
  template: `<p>Main-training</p>`,
})
export class TrainingMockComponent {}

@Component({
  selector: 'app-main-work-experiences',
  imports: [],
  template: `<p>Main-work-experience</p>`,
})
export class WorkExperiencesnMockComponent {}

@Component({
  selector: 'app-main-languages',
  imports: [],
  template: `<p>Main-languages</p>`,
})
export class LanguagesMockComponent {}

@Component({
  selector: 'app-main-summary',
  imports: [],
  template: `<p>Summary-mock-component</p>`,
})
export class SummaryMockComponent {}

describe('MainComponent', () => {
  let component: MainComponent;
  let componentRef: ComponentRef<MainComponent>;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
      imports: [
        MainComponent,
        SummaryMockComponent,
        HabilitiesMockComponent,
        TrainingMockComponent,
        WorkExperiencesnMockComponent,
        LanguagesMockComponent,
        TranslateModule.forRoot(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;

    componentRef.setInput('lang', 'es');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a summary component', () => {
    const summaryHtml = fixture.nativeElement.querySelector('app-main-summary');
    expect(summaryHtml).toBeTruthy();
  });

  it('should render a habilities component', () => {
    const habilitiesHtml = fixture.nativeElement.querySelector(
      'app-main-habilities'
    );
    expect(habilitiesHtml).toBeTruthy();
  });

  it('should render a training component', () => {
    const trainingHtml =
      fixture.nativeElement.querySelector('app-main-training');
    expect(trainingHtml).toBeTruthy();
  });

  it('should render a work-experiences component', () => {
    const workExperiencesHtml = fixture.nativeElement.querySelector(
      'app-main-work-experiences'
    );
    expect(workExperiencesHtml).toBeTruthy();
  });

  it('should render a languages component', () => {
    const languagesHtml =
      fixture.nativeElement.querySelector('app-main-languages');
    expect(languagesHtml).toBeTruthy();
  });
});
