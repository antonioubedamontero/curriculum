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
}
