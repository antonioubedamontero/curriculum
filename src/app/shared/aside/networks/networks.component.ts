import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { IdentificationResponse, NetworkItem } from '../../../interfaces';
import { DOCUMENT } from '@angular/common';
import {
  WorkExpansionOpenPanelState,
  WorkExperienceExpasionPanelService,
} from '../../../services/work-experience-expasion-panel.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-networks',
  imports: [MatIconModule],
  templateUrl: './networks.component.html',
  styleUrl: './networks.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NetworksComponent {
  identificationResponse = input.required<IdentificationResponse>();

  document = inject(DOCUMENT);
  workExperienceExpasionPanelService = inject(
    WorkExperienceExpasionPanelService
  );
  sanitizer = inject(DomSanitizer);

  safeUrl = this.sanitizer.bypassSecurityTrustUrl('javascript:void(0)');

  networks = computed(() => {
    const printNetwork: NetworkItem = {
      shouldDownLoad: false,
      url: this.safeUrl,
      label: 'Curriculum',
      ariaLabel: 'Print curriculum',
      icon: 'images/print.ico',
      isPrintAction: true,
    };

    const netWorks = [...this.identificationResponse().netWorks, printNetwork];

    return netWorks.map((network: NetworkItem) => {
      return {
        ...network,
      };
    });
  });

  printPage(): void {
    this.workExperienceExpasionPanelService.openState.set(
      WorkExpansionOpenPanelState.all
    );
    setTimeout(() => {
      window.print();
    }, 1000);
  }
}
