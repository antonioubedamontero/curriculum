import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { rxResource } from '@angular/core/rxjs-interop';

import { TranslatePipe } from '@ngx-translate/core';

import { MainService } from '../../../../services/main.service';

@Component({
  selector: 'main-training',
  imports: [MatIconModule, TranslatePipe],
  templateUrl: './training.component.html',
  styleUrl: './training.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrainingComponent {
  mainService = inject(MainService);
  trainingResouce = rxResource({
    request: () => ({}),
    loader: ({ request }) => this.mainService.getTrainings(),
  });
  trainings = computed(() => this.trainingResouce.value()?.trainings);
}
