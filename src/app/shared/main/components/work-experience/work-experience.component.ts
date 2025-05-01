import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';

import { TranslateModule } from '@ngx-translate/core';

import { MainService } from '../../../../services/main.service';
import { WorkExperienceResponseDetail } from '../../../../interfaces';
import { WorkExperienceItemComponent } from './work-experience-item/work-experience-item/work-experience-item.component';

@Component({
  selector: 'main-work-experience',
  imports: [
    WorkExperienceItemComponent,
    MatIconModule,
    MatAccordion,
    MatExpansionModule,
    TranslateModule,
  ],
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
