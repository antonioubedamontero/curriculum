import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentRef } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { TranslateModule } from '@ngx-translate/core';

import { CompanyProjectsComponent } from './company-projects.component';
import { projectItemResponseWithProjectAndRangesMock } from '../../../../../mocks/data/main-response.mock';

describe('CompanyProjectsComponent', () => {
  let component: CompanyProjectsComponent;
  let componentRef: ComponentRef<CompanyProjectsComponent>;
  let fixture: ComponentFixture<CompanyProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CompanyProjectsComponent,
        MatIconModule,
        MatChipsModule,
        TranslateModule.forRoot(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CompanyProjectsComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;

    componentRef.setInput('companyProjects', [
      { ...projectItemResponseWithProjectAndRangesMock },
    ]);

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should return first project', () => {
    expect(component.firstProject()).toBeTruthy();
  });
});
