import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IdentificationResponse } from '../interfaces';
import { ApiPathProxyService } from './api-path-proxy.service';

@Injectable({
  providedIn: 'root',
})
export class IdentificationService {
  private readonly http = inject(HttpClient);
  private readonly apiPathProxyService = inject(ApiPathProxyService);

  getIdentification(): Observable<IdentificationResponse> {
    const apiPath = this.apiPathProxyService.getAPIPath('identification');
    return this.http.get<IdentificationResponse>(apiPath);
  }
}
