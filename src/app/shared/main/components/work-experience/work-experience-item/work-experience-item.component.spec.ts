import { ComponentFixture, TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';

import { MatChipsModule } from '@angular/material/chips';
import { TranslateModule } from '@ngx-translate/core';

import { WorkExperienceItemComponent } from './work-experience-item.component';
import { CompanyProjectsComponent } from '../company-projects/company-projects.component';
import { workExperienceItemResponseMock1 } from '../../../../../mocks/data/main-response.mock';

describe('WorkExperienceItemComponent', () => {
  let component: WorkExperienceItemComponent;
  let fixture: ComponentFixture<WorkExperienceItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        WorkExperienceItemComponent,
        CompanyProjectsComponent,
        MatIconModule,
        MatChipsModule,
        TranslateModule.forRoot(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkExperienceItemComponent);
    component = fixture.componentInstance;

    (component.workExperience as any) = signal(workExperienceItemResponseMock1);

    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
