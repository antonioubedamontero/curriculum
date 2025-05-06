import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

import { Observable, tap } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

import { ApiPathProxyService } from './api-path-proxy.service';
import { MetaTags, SEO } from '../interfaces';

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
    const apiPath = this.apiPathProxyService.getAPIPath('seo', lang);
    return this.http.get<SEO>(apiPath).pipe(tap((seo) => this.seo.set(seo)));
  }

  setSEO(lang: string): void {
    if (this.seo()) {
      this.document.documentElement.setAttribute('lang', lang);
      this.setSEOTitle(this.seo()!.title);
      this.setSEOMetaTags(this.seo()!.metaTags);
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
}
