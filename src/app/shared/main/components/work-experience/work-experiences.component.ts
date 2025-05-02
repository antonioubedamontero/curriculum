import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
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
import {
  WorkExpansionOpenPanelState,
  WorkExperienceExpasionPanelService,
} from '../../../../services/work-experience-expasion-panel.service';

@Component({
  selector: 'main-work-experiences',
  imports: [
    WorkExperienceItemComponent,
    MatIconModule,
    MatAccordion,
    MatExpansionModule,
    TranslateModule,
  ],
  templateUrl: './work-experiences.component.html',
  styleUrl: './work-experiences.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkExperiencesComponent {
  expansionPanelsRef = viewChildren<MatExpansionPanel>('expansionPanels');

  workExperienceExpansionPanelService = inject(
    WorkExperienceExpasionPanelService
  );
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

  private readonly loadExpansionPanelffect = effect(() => {
    if (this.expansionPanelsRef().length > 0) {
      untracked(() => {
        this.workExperienceExpansionPanelService.openState.set(
          WorkExpansionOpenPanelState.initial
        );
      });
    }
  });

  private readonly workExperienceExpansionPanelChangeEffect = effect(() => {
    const newOpenState = this.workExperienceExpansionPanelService.openState();
    this.changeOpenStatePanel(newOpenState);
  });

  getCategory(key: string): WorkExperienceResponseDetail {
    return this.workExperienceResponse()[key];
  }

  changeOpenStatePanel(state: WorkExpansionOpenPanelState) {
    if (state === WorkExpansionOpenPanelState.unset) return;

    if (state === WorkExpansionOpenPanelState.initial) {
      const lastExperience = this.expansionPanelsRef().length - 1;
      this.expansionPanelsRef()?.at(0)?.open();
      this.expansionPanelsRef()?.at(lastExperience)?.open();
    }

    if (state === WorkExpansionOpenPanelState.all) {
      this.expansionPanelsRef().forEach((panel) => panel.open());
    }
  }
}
