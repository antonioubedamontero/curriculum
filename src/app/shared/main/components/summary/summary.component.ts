import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
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
  lang = input.required<string>();

  mainService = inject(MainService);

  summaryResource = rxResource({
    request: () => ({ lang: this.lang() }),
    loader: ({ request }) => this.mainService.getSummary(request.lang),
  });

  summary = computed(() => this.summaryResource.value()?.summary);
}
