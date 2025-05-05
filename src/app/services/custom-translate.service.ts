import { DOCUMENT } from '@angular/common';
import { inject, Injectable, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { TranslateService } from '@ngx-translate/core';

import { availableLangs, defaultLang } from '../interfaces/langs';

export interface SEOMetaTags {
  [key: string]: string;
}

@Injectable({
  providedIn: 'root',
})
export class CustomTranslateService {
  translate = inject(TranslateService);
  titleService = inject(Title);
  metaService = inject(Meta);
  document = inject(DOCUMENT);

  currentLang = signal(this.translate.currentLang);

  initTranslations(lang = defaultLang) {
    this.translate.addLangs([...availableLangs]);
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    this.currentLang.set(lang);
    this.setSEO(lang);
  }

  changeLanguage(lang = defaultLang) {
    const newLang = availableLangs.includes(lang) ? lang : defaultLang;
    this.translate.use(newLang);
    this.currentLang.set(newLang);
    this.setSEO(newLang);
  }

  private setSEO(lang: string): void {
    this.translate.get('SEO').subscribe((SEO) => {
      this.document.documentElement.setAttribute('lang', lang);
      this.setSEOTitle(SEO.title);
      this.setSEOMetaTags(SEO.metaTags);
    });
  }

  private setSEOTitle(SEOTitle: string): void {
    this.titleService.setTitle(SEOTitle);
  }

  private setSEOMetaTags(SEOMetaTags: SEOMetaTags): void {
    this.metaService.addTags([
      { name: 'author', content: SEOMetaTags['author'] },
      { name: 'description', content: SEOMetaTags['description'] },
      { name: 'keywords', content: SEOMetaTags['keywords'] },
    ]);
  }
}
