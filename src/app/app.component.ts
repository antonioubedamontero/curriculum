import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CustomTranslateService } from './services/custom-translate.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  customTranslateService = inject(CustomTranslateService);

  constructor() {
    this.customTranslateService.initTranslations();
  }
}
