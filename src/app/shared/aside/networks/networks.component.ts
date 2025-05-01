import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

import { IdentificationResponse, NetworkItem } from '../../../interfaces';

@Component({
  selector: 'networks',
  imports: [],
  templateUrl: './networks.component.html',
  styleUrl: './networks.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NetworksComponent {
  identificationResponse = input.required<IdentificationResponse>();

  networks = computed(() =>
    this.identificationResponse().netWorks.map(
      // TODO: Change networks in API to not show assets/ and point to public folder
      (network: NetworkItem) => {
        const { shouldDownLoad, url, icon } = network;
        return {
          ...network,
          url: shouldDownLoad ? url.replace('assets/', '') : url,
          icon: icon.replace('assets/', ''),
        };
      }
    )
  );
}
