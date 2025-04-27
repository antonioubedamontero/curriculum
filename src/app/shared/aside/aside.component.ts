import { Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

import { IdentificationResponse } from '../../interfaces';

@Component({
  selector: 'app-aside',
  imports: [TranslatePipe],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss',
})
export class AsideComponent {
  identificationResponse = input.required<IdentificationResponse>();
}
