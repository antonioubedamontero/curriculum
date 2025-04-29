import { Component } from '@angular/core';

import { SummaryComponent } from './components/summary/summary.component';
import { HabilitiesComponent } from './components/habilities/habilities.component';
import { TrainingComponent } from './components/training/training.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { LanguagesComponent } from './components/languages/languages.component';

@Component({
  selector: 'app-main',
  imports: [
    SummaryComponent,
    HabilitiesComponent,
    TrainingComponent,
    WorkExperienceComponent,
    LanguagesComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
