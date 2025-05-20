import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';

import { MainService } from '../../../../services/main.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-main-portfolio-projects',
  imports: [MatTableModule, TranslateModule],
  templateUrl: './portfolio-projects.component.html',
  styleUrl: './portfolio-projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PortfolioProjectsComponent {
  lang = input.required<string>();

  mainService = inject(MainService);

  displayedColumns: string[] = ['name', 'code', 'app'];

  portfolioProjectsResource = rxResource({
    request: () => ({ lang: this.lang() }),
    loader: ({ request }) => {
      return this.mainService
        .getPersonalProjects(request.lang)
        .pipe(map((projects) => projects.personalProjects));
    },
  });
}
