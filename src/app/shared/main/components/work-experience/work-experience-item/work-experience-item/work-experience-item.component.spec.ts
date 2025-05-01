import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';

import { TranslateModule } from '@ngx-translate/core';

import { WorkExperienceItemComponent } from './work-experience-item.component';

describe('WorkExperienceItemComponent', () => {
  let component: WorkExperienceItemComponent;
  let fixture: ComponentFixture<WorkExperienceItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        WorkExperienceItemComponent,
        MatIconModule,
        TranslateModule.forRoot(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkExperienceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
