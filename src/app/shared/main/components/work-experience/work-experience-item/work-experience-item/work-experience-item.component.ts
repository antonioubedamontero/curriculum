import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { WorkExperienceItemResponse } from '../../../../../../interfaces';

import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'work-experience-item',
  imports: [MatChipsModule],
  templateUrl: './work-experience-item.component.html',
  styleUrl: './work-experience-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkExperienceItemComponent {
  workExperience = input.required<WorkExperienceItemResponse>();
}
