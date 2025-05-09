import { Injectable, signal } from '@angular/core';

import { availableLangs, defaultLang } from '../../interfaces/langs';

@Injectable({
  providedIn: 'root',
})
export class CustomTranslateMockService {
  currentLang = signal(defaultLang);

  initTranslations(lang = defaultLang) {
    this.currentLang.set(lang);
  }

  changeLanguage(lang = defaultLang) {
    if (availableLangs.includes(lang)) {
      this.currentLang.set(lang);
      return;
    }

    this.currentLang.set(defaultLang);
  }
}
