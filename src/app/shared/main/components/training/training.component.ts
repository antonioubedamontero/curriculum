import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'main-training',
  imports: [MatIconModule, TranslatePipe],
  templateUrl: './training.component.html',
  styleUrl: './training.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrainingComponent {}
