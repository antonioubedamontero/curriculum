import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { CustomTranslateService } from './custom-translate.service';
import { Observable } from 'rxjs';

import { IdentificationResponse } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class IdentificationService {
  private readonly baseUrl = environment.apiUrl;

  private readonly http = inject(HttpClient);
  private readonly customTranslateService = inject(CustomTranslateService);

  getIdentification(): Observable<IdentificationResponse> {
    const identificationUrl =
      this.customTranslateService.currentLang() === 'es'
        ? environment.identificationApiEsUrl
        : environment.identificationApiEnUrl;
    return this.http.get<IdentificationResponse>(
      `${this.baseUrl}/${identificationUrl}`
    );
  }
}
