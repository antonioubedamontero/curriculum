import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'main-habilities',
  imports: [MatIconModule, TranslateModule],
  templateUrl: './habilities.component.html',
  styleUrl: './habilities.component.scss',
})
export class HabilitiesComponent {}
