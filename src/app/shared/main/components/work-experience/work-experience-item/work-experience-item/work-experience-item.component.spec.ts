import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';

import { MatChipsModule } from '@angular/material/chips';
import { TranslateModule } from '@ngx-translate/core';

import { WorkExperienceItemComponent } from './work-experience-item.component';
import { signal } from '@angular/core';
import { workExperienceItemResponseMock1 } from '../../../../../../mocks/data/main-response.mock';

describe('WorkExperienceItemComponent', () => {
  let component: WorkExperienceItemComponent;
  let fixture: ComponentFixture<WorkExperienceItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        WorkExperienceItemComponent,
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
