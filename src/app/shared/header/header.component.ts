import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  signal,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';

import { IdentificationResponse } from '../../interfaces';
import { CustomTranslateService } from '../../services/custom-translate.service';
import { availableLangs } from '../../interfaces/langs';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [MatIconModule, ReactiveFormsModule, MatSelectModule, TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  identificationResponse = input.required<IdentificationResponse>();

  customTranslateService = inject(CustomTranslateService);
  router = inject(Router);

  nameAndSurname = computed(() => {
    const { name, surname } = this.identificationResponse().identification;
    return `${name} ${surname}`;
  });
  role = computed(() => this.identificationResponse().role);

  languageDomains = signal(availableLangs);
  currentLang = signal(this.customTranslateService.currentLang());

  changeLanguage(lang: string) {
    console.log('change language');
    this.customTranslateService.changeLanguage(lang);
    this.router.navigate([lang, 'web-developer']);
  }
}
