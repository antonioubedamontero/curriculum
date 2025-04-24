import { inject, Injectable } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

const availableLangs = ['es', 'en'];
const defaultLang = 'es';

@Injectable({
  providedIn: 'root',
})
export class CustomTranslateService {
  translate = inject(TranslateService);

  initTranslations(lang = defaultLang) {
    this.translate.addLangs([...availableLangs]);
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
  }

  getCurentLang() {
    return this.translate.currentLang;
  }

  chageLanguage(lang = defaultLang) {
    const newLang = availableLangs.includes(lang) ? lang : defaultLang;
    this.translate.use(newLang);
  }
}
