import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

@Component({
  selector: 'main-habilities',
  imports: [],
  template: `<p>Main-habilities</p>`,
})
export class HabilitiesMockComponent {}

@Component({
  selector: 'main-training',
  imports: [],
  template: `<p>Main-training</p>`,
})
export class TrainingMockComponent {}

@Component({
  selector: 'main-work-experiences',
  imports: [],
  template: `<p>Main-work-experience</p>`,
})
export class WorkExperiencesnMockComponent {}

@Component({
  selector: 'main-languages',
  imports: [],
  template: `<p>Main-languages</p>`,
})
export class LanguagesMockComponent {}

@Component({
  selector: 'main-summary',
  imports: [],
  template: `<p>Summary-mock-component</p>`,
})
export class SummaryMockComponent {}

describe('MainComponent', () => {
  let component: MainComponent;
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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
