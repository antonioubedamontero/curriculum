import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';

import { WorkExperienceComponent } from './work-experience.component';
import { TranslateModule } from '@ngx-translate/core';

describe('WorkExperienceComponent', () => {
  let component: WorkExperienceComponent;
  let fixture: ComponentFixture<WorkExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        WorkExperienceComponent,
        MatIconModule,
        TranslateModule.forRoot(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(WorkExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
