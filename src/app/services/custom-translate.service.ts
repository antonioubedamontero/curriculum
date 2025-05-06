import { DOCUMENT } from '@angular/common';
import { inject, Injectable, signal } from '@angular/core';

import { delay, tap } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

import { availableLangs, defaultLang } from '../interfaces/langs';
import { SeoService } from './seo.service';
import { SEO } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class CustomTranslateService {
  translate = inject(TranslateService);
  document = inject(DOCUMENT);
  seoService = inject(SeoService);

  currentLang = signal(this.translate.currentLang);

  initTranslations(lang = defaultLang) {
    this.translate.addLangs([...availableLangs]);
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    this.currentLang.set(lang);

    this.loadSeo(lang);
  }

  changeLanguage(lang = defaultLang) {
    const newLang = availableLangs.includes(lang) ? lang : defaultLang;
    this.translate.use(newLang);
    this.currentLang.set(newLang);

    this.loadSeo(newLang);
  }

  private loadSeo(lang: string): void {
    this.seoService
      .getSeo(lang)
      .pipe(
        tap((seo: SEO) => this.seoService.setSEO(lang)),
        delay(500)
      )
      .subscribe((seo: SEO) => {
        this.seoService.setSEO(lang);
      });
  }
}
