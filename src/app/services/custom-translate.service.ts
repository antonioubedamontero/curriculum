import { inject, Injectable, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { TranslateService } from '@ngx-translate/core';

export interface SEOMetaTags {
  [key: string]: string;
}

const availableLangs = ['es', 'en'];
const defaultLang = 'es';

@Injectable({
  providedIn: 'root',
})
export class CustomTranslateService {
  translate = inject(TranslateService);
  titleService = inject(Title);
  metaService = inject(Meta);

  currentLang = signal(this.translate.currentLang);

  initTranslations(lang = defaultLang) {
    this.translate.addLangs([...availableLangs]);
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    this.currentLang.set(lang);
    this.setSEO();
  }

  chageLanguage(lang = defaultLang) {
    const newLang = availableLangs.includes(lang) ? lang : defaultLang;
    this.translate.use(newLang);
    this.currentLang.set(newLang);
    this.setSEO();
  }

  private setSEO(): void {
    this.translate.get('SEO').subscribe((SEO) => {
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
