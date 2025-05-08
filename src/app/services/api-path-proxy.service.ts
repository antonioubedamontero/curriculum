import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { tap, Observable, of, switchMap } from 'rxjs';

import { environment } from '../../environments/environment';
import { APIOrchestratorResponse } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ApiPathProxyService {
  private readonly http = inject(HttpClient);
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  private readonly apiPaths = signal<APIOrchestratorResponse | {}>({});

  loadApiPathsFromApi(): Observable<APIOrchestratorResponse> {
    return this.http
      .get<APIOrchestratorResponse>(environment.apiUrlOrchestratorPath)
      .pipe(
        tap((apiPaths) => {
          this.apiPaths.set(apiPaths);
        })
      );
  }

  getAPIPath(collection: string, language: string): Observable<string> {
    if (Object.keys(this.apiPaths()).length !== 0)
      // Api paths are already loaded
      return of(this.getApiPathUrl(collection, language));

    return this.loadApiPathsFromApi().pipe(
      // need to load api paths before
      switchMap(() => of(this.getApiPathUrl(collection, language)))
    );
  }

  private getApiPathUrl(collection: string, language: string): string {
    const apiPathKeys: string[] = Object.keys(this.apiPaths());

    if (!apiPathKeys || apiPathKeys.length === 0)
      throw new Error('Error getting api path url. Not api paths where loaded');

    if (!apiPathKeys.includes(language)) {
      throw new Error(`${language} is not defined in API`);
    }

    const responseTyped = this.apiPaths() as APIOrchestratorResponse;

    const collections = responseTyped[language];

    if (!collections[collection]) {
      throw new Error(`${collection} is not defined in API `);
    }

    return `${responseTyped['apiUrl']}${collections[collection]}`;
  }
}
