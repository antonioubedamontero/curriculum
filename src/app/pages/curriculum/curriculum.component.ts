import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { map, tap } from 'rxjs/operators';

import { ActivatedRoute } from '@angular/router';
import { AsideComponent } from '../../shared/aside/aside.component';
import { CustomTranslateService } from '../../services/custom-translate.service';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { MainComponent } from '../../shared/main/main.component';

@Component({
  imports: [AsideComponent, FooterComponent, HeaderComponent, MainComponent],
  templateUrl: './curriculum.component.html',
  styleUrl: './curriculum.component.css',
})
export class CurriculumComponent {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly customTranslateService = inject(CustomTranslateService);

  private readonly activatedRoute$ = this.activatedRoute.paramMap.pipe(
    map((paramMap) => paramMap.get('lang') ?? ''),
    tap((lang) => this.customTranslateService.chageLanguage(lang))
  );
  currentLang = toSignal(this.activatedRoute$, {
    initialValue: this.customTranslateService.currentLang(),
  });
}
