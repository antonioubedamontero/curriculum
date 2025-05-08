import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { Component, ComponentRef, input } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { TranslateModule } from '@ngx-translate/core';

import { WorkExperiencesComponent } from './work-experiences.component';

import { MainService } from '../../../../services/main.service';
import { MainMockService } from '../../../../mocks/services/main-mock.service';
import { WorkExperienceItemResponse } from '../../../../interfaces';

@Component({
  selector: 'app-work-experience-item',
  imports: [],
  template: `<p>Work experience item component</p>`,
})
export class WorkExperienceItemMockComponent {
  workExperience = input.required<WorkExperienceItemResponse>();
}

describe('WorkExperiencesComponent', () => {
  let component: WorkExperiencesComponent;
  let componentRef: ComponentRef<WorkExperiencesComponent>;
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
    componentRef = fixture.componentRef;

    componentRef.setInput('lang', 'es');

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should get work experiences from api', (done) => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.workExperienceResponse()).toBeTruthy();
      done();
    });
  });

  it('should get work experiences categories', (done) => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.workExperienceCategories()).toBeTruthy();
      expect(component.workExperienceCategories().length).toBeGreaterThan(0);
      done();
    });
  });

  it('should get category details from ctegory', () => {
    expect(component.getCategory('workSection1')).toBeTruthy();
  });

  it('should render work experience title section', (done) => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const htmlWorkExperienceSectionTitle: HTMLElement =
        fixture.nativeElement.querySelector('.work-experience-title-section');
      expect(htmlWorkExperienceSectionTitle.textContent).toBe(
        'main.work-experience.title'
      );
      done();
    });
  });
});
