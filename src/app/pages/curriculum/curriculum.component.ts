import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';

import { AsideComponent } from '../../shared/aside/aside.component';
import { CustomTranslateService } from '../../services/custom-translate.service';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { MainComponent } from '../../shared/main/main.component';
import { IdentificationService } from '../../services/identification.service';
import { IdentificationResponse } from '../../interfaces';

@Component({
  imports: [AsideComponent, FooterComponent, HeaderComponent, MainComponent],
  templateUrl: './curriculum.component.html',
  styleUrl: './curriculum.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurriculumComponent {
  private readonly customTranslateService = inject(CustomTranslateService);
  private readonly identificationService = inject(IdentificationService);

  identificationData = signal<IdentificationResponse | undefined>(undefined);
  currentLang = computed(() => this.customTranslateService.currentLang());

  changeLangEffect = effect(() => {
    this.identificationService
      .getIdentification(this.currentLang())
      .subscribe((resp) => {
        this.identificationData.set(resp);
      });
  });
}
