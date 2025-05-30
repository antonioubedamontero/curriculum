import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentRef } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';

import { MatChipsModule } from '@angular/material/chips';
import { TranslateModule } from '@ngx-translate/core';

import { WorkExperienceItemComponent } from './work-experience-item.component';
import { CompanyProjectsComponent } from '../company-projects/company-projects.component';
import { workExperienceItemResponseMock1 } from '../../../../../mocks/data/main-response.mock';

describe('WorkExperienceItemComponent', () => {
  let component: WorkExperienceItemComponent;
  let componentRef: ComponentRef<WorkExperienceItemComponent>;
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
    componentRef = fixture.componentRef;

    componentRef.setInput('workExperience', workExperienceItemResponseMock1);

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render range dates and company name', (done) => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const htmlRangeDates: HTMLElement = fixture.nativeElement.querySelector(
        '.work-experience-item-dates'
      );
      expect(htmlRangeDates.innerHTML).toBeTruthy();

      const htmlCompanyName: HTMLElement = fixture.nativeElement.querySelector(
        '.work-experience-item-company'
      );
      expect(htmlCompanyName.innerHTML).toBeTruthy();
      done();
    });
  });

  it('should render company projects component', (done) => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const htmlCompanyProjects: HTMLElement =
        fixture.nativeElement.querySelector('app-company-projects');
      expect(htmlCompanyProjects.innerHTML).toBeTruthy();
      done();
    });
  });
});
