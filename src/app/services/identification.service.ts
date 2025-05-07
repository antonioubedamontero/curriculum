import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, switchMap } from 'rxjs';

import { IdentificationResponse } from '../interfaces';
import { ApiPathProxyService } from './api-path-proxy.service';

@Injectable({
  providedIn: 'root',
})
export class IdentificationService {
  private readonly http = inject(HttpClient);
  private readonly apiPathProxyService = inject(ApiPathProxyService);

  getIdentification(lang: string): Observable<IdentificationResponse> {
    return this.apiPathProxyService
      .getAPIPath('identification', lang)
      .pipe(
        switchMap((apiPath) => this.http.get<IdentificationResponse>(apiPath))
      );
  }
}
