import { inject, Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { CustomTranslateService } from './custom-translate.service';

interface APICollection {
  [key: string]: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiPathProxyService {
  customTranslateService = inject(CustomTranslateService);

  getAPIPath(collection: string): string {
    const language = this.customTranslateService.currentLang();
    const environmentMap = new Map(Object.entries(environment));

    if (!environmentMap.get(language)) {
      throw new Error(`${language} is not defined in API `);
    }

    const collections = environmentMap.get(language) as APICollection;

    if (!collections[collection]) {
      throw new Error(`${collection} is not defined in API `);
    }

    return `${environment.apiUrl}/${collections[collection]}`;
  }
}
