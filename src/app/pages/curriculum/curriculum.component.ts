import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { map, tap } from 'rxjs';

import { ActivatedRoute } from '@angular/router';
import { AsideComponent } from '../../shared/aside/aside.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { MainComponent } from '../../shared/main/main.component';

@Component({
  imports: [
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    MainComponent
  ],
  templateUrl: './curriculum.component.html',
  styleUrl: './curriculum.component.css',
})
export class CurriculumComponent {
  private readonly activatedRoute = inject(ActivatedRoute);

  private readonly activatedRoute$ = this.activatedRoute.paramMap.pipe(
    map(paramMap => paramMap.get('lang') ?? 'es'),
    tap(lang => console.log('lang', lang))
  );
  currentLang = toSignal(this.activatedRoute$, { initialValue: 'es' });
}
