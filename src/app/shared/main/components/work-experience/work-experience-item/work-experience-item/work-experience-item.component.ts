import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { WorkExperienceResponseDetail } from '../../../../../../interfaces';

@Component({
  selector: 'work-experience-item',
  imports: [],
  template: './work-experience-item.component.html',
  styleUrl: './work-experience-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkExperienceItemComponent {
  workExperienceResponseDetail = input.required<WorkExperienceResponseDetail>();
}
