import { of } from 'rxjs';
import * as i18n from '../../../../public/i18n/es.json';

export class TranslateMockService {
  currentLang = 'es';
  defaultLang = 'es';

  langs: string[] = [];

  addLangs(newLangs: string[]) {
    this.langs = [...this.langs, ...newLangs];
  }

  setDefaultLang(defaulLang: string) {
    this.defaultLang = defaulLang;
  }

  use(lang: string) {
    this.currentLang = lang;
  }

  get(key: string) {
    const data = (i18n as any)[key];
    return of(data);
  }
}
