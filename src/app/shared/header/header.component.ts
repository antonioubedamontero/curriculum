import { Component, computed, input } from '@angular/core';

import { IdentificationResponse } from '../../interfaces';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  identificationResponse = input.required<IdentificationResponse>();
  nameAndSurname = computed(() => {
    const { name, surname } = this.identificationResponse().identification;
    return `${name} ${surname}`;
  });
  role = computed(() => this.identificationResponse().role);
}
