import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

import { IdentificationResponse } from '../../interfaces';

import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [TranslatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  identificationResponse = input.required<IdentificationResponse>();

  currentYear = new Date().getFullYear();
  nameAndSurname = computed(() => {
    const { name, surname } = this.identificationResponse().identification;
    return `${name} ${surname}`;
  });
}
