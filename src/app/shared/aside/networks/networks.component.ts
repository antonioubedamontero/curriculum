import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { IdentificationResponse, NetworkItem } from '../../../interfaces';

@Component({
  selector: 'networks',
  imports: [MatIconModule],
  templateUrl: './networks.component.html',
  styleUrl: './networks.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NetworksComponent {
  identificationResponse = input.required<IdentificationResponse>();

  networks = computed(() => this.identificationResponse().netWorks);
}
