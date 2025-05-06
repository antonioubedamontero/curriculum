import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomTranslateMockService {
  currentLang = signal('es');

  initTranslations(lang = 'es') {
    this.currentLang.set(lang);
  }

  changeLanguage(lang = 'es') {
    this.currentLang.set(lang);
  }
}
