import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

import { CompanyProjectsComponent } from '../company-projects/company-projects.component';
import { WorkExperienceItemResponse } from '../../../../../interfaces';

@Component({
  selector: 'app-work-experience-item',
  imports: [CompanyProjectsComponent, MatIconModule, MatChipsModule],
  templateUrl: './work-experience-item.component.html',
  styleUrl: './work-experience-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkExperienceItemComponent {
  workExperience = input.required<WorkExperienceItemResponse>();
}
