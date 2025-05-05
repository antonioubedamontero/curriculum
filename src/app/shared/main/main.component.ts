import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
} from '@angular/core';

import { SummaryComponent } from './components/summary/summary.component';
import { HabilitiesComponent } from './components/habilities/habilities.component';
import { TrainingComponent } from './components/training/training.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { WorkExperiencesComponent } from './components/work-experience/work-experiences.component';
import { defaultLang } from '../../interfaces/langs';

@Component({
  selector: 'app-main',
  imports: [
    SummaryComponent,
    HabilitiesComponent,
    TrainingComponent,
    WorkExperiencesComponent,
    LanguagesComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  lang = input.required<string>();
}
