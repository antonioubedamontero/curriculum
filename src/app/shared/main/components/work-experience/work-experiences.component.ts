import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  input,
  untracked,
  viewChildren,
} from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';
import {
  MatAccordion,
  MatExpansionModule,
  MatExpansionPanel,
} from '@angular/material/expansion';

import { TranslateModule } from '@ngx-translate/core';

import { MainService } from '../../../../services/main.service';
import { WorkExperienceResponseDetail } from '../../../../interfaces';

import { WorkExperienceItemComponent } from './work-experience-item/work-experience-item.component';

@Component({
  selector: 'app-main-work-experiences',
  imports: [
    MatIconModule,
    MatAccordion,
    MatExpansionModule,
    TranslateModule,
    WorkExperienceItemComponent,
  ],
  templateUrl: './work-experiences.component.html',
  styleUrl: './work-experiences.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkExperiencesComponent {
  lang = input.required<string>();

  expansionPanelsRef = viewChildren<MatExpansionPanel>('expansionPanels');

  mainService = inject(MainService);

  getDeveloperWorkExperiencesResource = rxResource({
    request: () => ({ lang: this.lang() }),
    loader: ({ request }) =>
      this.mainService.getDeveloperWorkExperiences(request.lang),
  });
  workExperienceResponse = computed(
    () => this.getDeveloperWorkExperiencesResource.value() ?? {}
  );
  workExperienceCategories = computed(() =>
    Object.keys(this.workExperienceResponse())
  );

  private readonly expansionPanelChangeEffect = effect(() => {
    if (this.expansionPanelsRef().length > 0) {
      untracked(() => {
        this.expansionPanelsRef()?.at(0)?.open();
      });
    }
  });

  getCategory(key: string): WorkExperienceResponseDetail {
    return this.workExperienceResponse()[key];
  }
}
