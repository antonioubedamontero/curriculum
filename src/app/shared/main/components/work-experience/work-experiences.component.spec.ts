import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { Component, input, signal } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { TranslateModule } from '@ngx-translate/core';

import { WorkExperiencesComponent } from './work-experiences.component';

import { MainService } from '../../../../services/main.service';
import { MainMockService } from '../../../../mocks/services/main-mock.service';
import { WorkExperienceResponseDetail } from '../../../../interfaces';

@Component({
  selector: 'work-experience-item',
  imports: [],
  template: `<p>Work experience item component</p>`,
})
export class WorkExperienceItemMockComponent {
  workExperienceResponseDetail = input.required<WorkExperienceResponseDetail>();
}

describe('WorkExperiencesComponent', () => {
  let component: WorkExperiencesComponent;
  let fixture: ComponentFixture<WorkExperiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withFetch()),
        provideHttpClientTesting,
        {
          provide: MainService,
          useClass: MainMockService,
        },
      ],
      imports: [
        WorkExperiencesComponent,
        WorkExperienceItemMockComponent,
        MatIconModule,
        MatAccordion,
        MatExpansionModule,
        TranslateModule.forRoot(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkExperiencesComponent);
    component = fixture.componentInstance;

    (component.lang as any) = signal('es');

    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
