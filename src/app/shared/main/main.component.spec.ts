import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

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
  selector: 'main-work-experience',
  imports: [],
  template: `<p>Main-work-experience</p>`,
})
export class WorkExperienceMockComponent {}

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
      imports: [
        MainComponent,
        SummaryMockComponent,
        HabilitiesMockComponent,
        TrainingMockComponent,
        WorkExperienceMockComponent,
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
