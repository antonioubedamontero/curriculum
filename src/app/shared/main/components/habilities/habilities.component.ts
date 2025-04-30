import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

import { MainService } from '../../../../services/main.service';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'main-habilities',
  imports: [MatIconModule, TranslateModule],
  templateUrl: './habilities.component.html',
  styleUrl: './habilities.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HabilitiesComponent {
  mainService = inject(MainService);

  habilitiesResource = rxResource({
    request: () => ({}),
    loader: ({ request }) => this.mainService.getHabilities(),
  });
  habilities = computed(() => this.habilitiesResource.value()?.habilities);
}
