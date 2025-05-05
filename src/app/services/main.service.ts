import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ApiPathProxyService } from './api-path-proxy.service';
import {
  HabilitiesResponse,
  LanguagesResponse,
  SummaryResponse,
  TrainingsResponse,
  WorkExperiencesResponse,
} from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  private readonly http = inject(HttpClient);
  private readonly apiPathProxyService = inject(ApiPathProxyService);

  getSummary(lang: string): Observable<SummaryResponse> {
    const path = this.apiPathProxyService.getAPIPath('summary', lang);
    return this.http.get<SummaryResponse>(path);
  }

  getHabilities(lang: string): Observable<HabilitiesResponse> {
    const path = this.apiPathProxyService.getAPIPath('habilities', lang);
    return this.http.get<HabilitiesResponse>(path);
  }

  getTrainings(lang: string): Observable<TrainingsResponse> {
    const path = this.apiPathProxyService.getAPIPath('trainings', lang);
    return this.http.get<TrainingsResponse>(path);
  }

  getLanguages(lang: string): Observable<LanguagesResponse> {
    const path = this.apiPathProxyService.getAPIPath('languages', lang);
    return this.http.get<LanguagesResponse>(path);
  }

  getDeveloperWorkExperiences(
    lang: string
  ): Observable<WorkExperiencesResponse> {
    const path = this.apiPathProxyService.getAPIPath('workExperiences', lang);
    return this.http.get<WorkExperiencesResponse>(path);
  }
}
