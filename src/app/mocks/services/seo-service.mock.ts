import { Injectable, signal } from '@angular/core';

import { Observable, of, tap } from 'rxjs';

import { MetaTags, SEO } from '../../interfaces';
import { seoMock } from '../data/seo-response.mock';

@Injectable({ providedIn: 'root' })
export class SeoMockService {
  seo = signal<SEO | undefined>(undefined);

  getSeo(lang: string): Observable<SEO> {
    return of(seoMock).pipe(tap((resp) => this.seo.set(seoMock)));
  }

  setSEO(lang: string): void {
    if (this.seo()) {
      this.setSEOTitle(this.seo()!.title);
      this.setSEOMetaTags(this.seo()!.metaTags);
    }
  }

  setSEOTitle(SEOTitle: string): void {
    return;
  }

  private setSEOMetaTags(SEOMetaTags: MetaTags): void {
    return;
  }
}
