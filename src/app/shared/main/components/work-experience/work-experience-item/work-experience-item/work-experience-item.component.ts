import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { WorkExperienceItemResponse } from '../../../../../../interfaces';

@Component({
  selector: 'work-experience-item',
  imports: [],
  templateUrl: './work-experience-item.component.html',
  styleUrl: './work-experience-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkExperienceItemComponent {
  workExperience = input.required<WorkExperienceItemResponse>();
}
