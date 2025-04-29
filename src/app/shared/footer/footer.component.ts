import { Component, computed, input } from '@angular/core';

import { IdentificationResponse, NetworkItem } from '../../interfaces';

import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [TranslatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  identificationResponse = input.required<IdentificationResponse>();

  currentYear = new Date().getFullYear();
  nameAndSurname = computed(() => {
    const { name, surname } = this.identificationResponse().identification;
    return `${name} ${surname}`;
  });
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
