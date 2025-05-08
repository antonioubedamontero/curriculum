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
import { WorkExperienceResponseDetail } from '../../../../interfaces';
import { WorkExperienceItemComponent } from './work-experience-item/work-experience-item.component';

@Component({
  selector: 'app-work-experience-item',
  imports: [],
  template: `<p>Work experience item component</p>`,
})
export class WorkExperienceItemMockComponent {
  workExperienceResponseDetail = input.required<WorkExperienceResponseDetail>();
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
        WorkExperienceItemComponent,
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

  it('should get category', () => {
    expect(component.getCategory('workSection1')).toBeTruthy();
  });
});
