import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { IdentificationResponse } from '../../../interfaces';

@Component({
  selector: 'app-networks',
  imports: [MatIconModule],
  templateUrl: './networks.component.html',
  styleUrl: './networks.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NetworksComponent {
  identificationResponse = input.required<IdentificationResponse>();
}
