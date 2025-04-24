import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomTranslateMockService {
  currentLang = signal('es');

  initTranslations(lang = 'es') {
    this.currentLang.set(lang);
  }

  chageLanguage(lang = 'es') {
    this.currentLang.set(lang);
  }
}
