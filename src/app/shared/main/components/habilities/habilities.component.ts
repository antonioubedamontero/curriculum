import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

import { MainService } from '../../../../services/main.service';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-main-habilities',
  imports: [MatIconModule, TranslateModule],
  templateUrl: './habilities.component.html',
  styleUrl: './habilities.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HabilitiesComponent {
  lang = input.required<string>();

  mainService = inject(MainService);

  habilitiesResource = rxResource({
    request: () => ({ lang: this.lang() }),
    loader: ({ request }) => this.mainService.getHabilities(request.lang),
  });
}
