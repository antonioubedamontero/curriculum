import { Injectable, signal } from '@angular/core';

import { Observable, of, tap } from 'rxjs';

import { MetaTags, SEO } from '../../interfaces';
import { seoMock } from '../data/seo-response.mock';

@Injectable({ providedIn: 'root' })
export class SeoMockService {
  seo = signal<SEO | undefined>(undefined);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getSeo(lang: string): Observable<SEO> {
    return of(seoMock).pipe(tap(() => this.seo.set(seoMock)));
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setSEO(lang: string): void {
    if (this.seo()) {
      this.setSEOTitle(this.seo()!.title);
      this.setSEOMetaTags(this.seo()!.metaTags);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setSEOTitle(SEOTitle: string): void {
    return;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private setSEOMetaTags(SEOMetaTags: MetaTags): void {
    return;
  }
}
