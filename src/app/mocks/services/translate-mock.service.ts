import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { TranslationObject } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslateServiceMock {
  getBrowserLang(): string {
    return 'es';
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  use(key: string): unknown {
    return null;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  get(key: string): Observable<TranslationObject> {
    const seoObject = {
      title: 'Title',
      metaTags: {
        author: 'Author',
        description: 'description',
        keywords: 'keywords',
      },
    };
    return of(seoObject);
  }
}
