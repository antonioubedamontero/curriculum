import { inject, Injectable, signal } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

const availableLangs = ['es', 'en'];
const defaultLang = 'es';

@Injectable({
  providedIn: 'root',
})
export class CustomTranslateService {
  translate = inject(TranslateService);
  currentLang = signal(this.translate.currentLang);

  initTranslations(lang = defaultLang) {
    this.translate.addLangs([...availableLangs]);
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    this.currentLang.set(lang);
  }

  chageLanguage(lang = defaultLang) {
    const newLang = availableLangs.includes(lang) ? lang : defaultLang;
    this.translate.use(newLang);
    this.currentLang.set(newLang);
  }
}
