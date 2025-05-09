import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { rxResource } from '@angular/core/rxjs-interop';

import { TranslatePipe } from '@ngx-translate/core';

import { MainService } from '../../../../services/main.service';

@Component({
  selector: 'app-main-training',
  imports: [MatIconModule, TranslatePipe],
  templateUrl: './training.component.html',
  styleUrl: './training.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrainingComponent {
  lang = input.required<string>();

  mainService = inject(MainService);

  trainingResouce = rxResource({
    request: () => ({ lang: this.lang() }),
    loader: ({ request }) => this.mainService.getTrainings(request.lang),
  });
}
