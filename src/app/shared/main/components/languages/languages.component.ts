import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';

import { MainService } from '../../../../services/main.service';

@Component({
  selector: 'main-languages',
  imports: [MatIconModule, TranslateModule],
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguagesComponent {
  mainService = inject(MainService);

  languageResource = rxResource({
    request: () => ({}),
    loader: ({ request }) => this.mainService.getLanguages(),
  });
  languages = computed(() => this.languageResource.value()?.languages);
}
