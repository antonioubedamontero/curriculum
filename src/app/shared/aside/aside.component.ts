import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { TranslatePipe } from '@ngx-translate/core';

import { IdentificationResponse } from '../../interfaces';
import { NetworksComponent } from './networks/networks.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-aside',
  imports: [TranslatePipe, NetworksComponent, MatIconModule],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsideComponent {
  sanitizer = inject(DomSanitizer);

  identificationResponse = input.required<IdentificationResponse>();
}
