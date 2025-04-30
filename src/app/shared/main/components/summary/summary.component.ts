import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { MatIconModule } from '@angular/material/icon';

import { TranslatePipe } from '@ngx-translate/core';

import { MainService } from '../../../../services/main.service';

@Component({
  selector: 'main-summary',
  imports: [TranslatePipe, MatIconModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SummaryComponent {
  mainService = inject(MainService);

  summaryResource = rxResource({
    request: () => ({}),
    loader: ({ request }) => this.mainService.getSummary(),
  });

  summary = computed(() => this.summaryResource.value()?.summary);
}
