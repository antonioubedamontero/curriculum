import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

import { ProjectItemResponse } from '../../../../../interfaces';

@Component({
  selector: 'company-projects',
  imports: [MatIconModule, MatChipsModule],
  templateUrl: './company-projects.component.html',
  styleUrl: './company-projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyProjectsComponent {
  companyProjects = input.required<ProjectItemResponse[]>();

  firstProject = computed(() => this.companyProjects()[0]);
}
