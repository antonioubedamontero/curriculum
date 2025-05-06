import { DOCUMENT } from '@angular/common';
import { inject, Injectable, signal } from '@angular/core';

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

    this.seoService
      .getSeo(lang)
      .subscribe((seo: SEO) => this.seoService.setSEO(lang));
  }

  changeLanguage(lang = defaultLang) {
    const newLang = availableLangs.includes(lang) ? lang : defaultLang;
    this.translate.use(newLang);
    this.currentLang.set(newLang);

    this.seoService.setSEO(newLang);
  }
}
