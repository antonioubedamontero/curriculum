import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

import { Observable, switchMap, tap } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

import { ApiPathProxyService } from './api-path-proxy.service';
import { MetaTags, OgMetags, SEO } from '../interfaces';

@Injectable({ providedIn: 'root' })
export class SeoService {
  titleService = inject(Title);
  metaService = inject(Meta);

  private readonly http = inject(HttpClient);
  private readonly apiPathProxyService = inject(ApiPathProxyService);
  translate = inject(TranslateService);
  document = inject(DOCUMENT);

  seo = signal<SEO | undefined>(undefined);

  getSeo(lang: string): Observable<SEO> {
    return this.apiPathProxyService
      .getAPIPath('seo', lang)
      .pipe(
        switchMap((apiPath) =>
          this.http.get<SEO>(apiPath).pipe(tap((seo) => this.seo.set(seo)))
        )
      );
  }

  setSEO(lang: string): void {
    if (this.seo()) {
      this.document.documentElement.setAttribute('lang', lang);
      this.setSEOTitle(this.seo()!.title);
      this.setSEOMetaTags(this.seo()!.metaTags);
      this.setSEOOgMetaTags(this.seo()!.ogTags);
    }
  }

  setSEOTitle(SEOTitle: string): void {
    this.titleService.setTitle(SEOTitle);
  }

  private setSEOMetaTags(SEOMetaTags: MetaTags): void {
    // Add or update meta tags
    this.metaService.updateTag({
      name: 'author',
      content: SEOMetaTags['author'],
    });
    this.metaService.updateTag({
      name: 'description',
      content: SEOMetaTags['description'],
    });
    this.metaService.updateTag({
      name: 'keywords',
      content: SEOMetaTags['keywords'],
    });
  }

  private setSEOOgMetaTags(SEOOgMetaTags: OgMetags): void {
    Object.entries(SEOOgMetaTags).forEach(([key, value]) => {
      this.metaService.updateTag({
        name: 'og:'.concat(key),
        content: value,
      });
    });

    this.metaService.updateTag({
      name: 'og:type',
      content: 'website',
    });

    this.metaService.updateTag({
      name: 'og:image:width',
      content: '1200',
    });

    this.metaService.updateTag({
      name: 'og:image:height',
      content: '630',
    });
  }
}
