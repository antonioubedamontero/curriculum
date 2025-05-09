import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';

import { MainService } from '../../../../services/main.service';

@Component({
  selector: 'app-main-languages',
  imports: [MatIconModule, TranslateModule],
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguagesComponent {
  lang = input.required<string>();

  mainService = inject(MainService);

  languageResource = rxResource({
    request: () => ({ lang: this.lang() }),
    loader: ({ request }) => this.mainService.getLanguages(request.lang),
  });
}
