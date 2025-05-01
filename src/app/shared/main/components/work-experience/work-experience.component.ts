import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';

import { TranslateModule } from '@ngx-translate/core';

import { MainService } from '../../../../services/main.service';
import { WorkExperienceResponseDetail } from '../../../../interfaces';

@Component({
  selector: 'main-work-experience',
  imports: [MatIconModule, TranslateModule],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkExperienceComponent {
  mainService = inject(MainService);

  getDeveloperWorkExperiencesResource = rxResource({
    request: () => ({}),
    loader: ({ request }) => this.mainService.getDeveloperWorkExperiences(),
  });
  workExperienceResponse = computed(
    () => this.getDeveloperWorkExperiencesResource.value() ?? {}
  );
  workExperienceCategories = computed(() =>
    Object.keys(this.workExperienceResponse())
  );

  getCategory(key: string): WorkExperienceResponseDetail {
    return this.workExperienceResponse()[key];
  }
}
