import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { TranslateModule } from '@ngx-translate/core';
import { map } from 'rxjs';

import { SeoService } from '../../../../services/seo.service';
import { SEO } from '../../../../interfaces/seo.interface';

@Component({
  selector: 'app-tags',
  imports: [MatIconModule, MatChipsModule, TranslateModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagsComponent {
  lang = input.required<string>();

  seoService = inject(SeoService);

  tagsResource = rxResource({
    request: () => ({ lang: this.lang() }),
    loader: ({ request }) =>
      this.seoService
        .getSeo(request.lang)
        .pipe(map((seo: SEO) => seo.metaTags.keywords.split(','))),
  });
}
