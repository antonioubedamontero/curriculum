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

  getSummary(): Observable<SummaryResponse> {
    const path = this.apiPathProxyService.getAPIPath('summary');
    return this.http.get<SummaryResponse>(path);
  }

  getHabilities(): Observable<HabilitiesResponse> {
    const path = this.apiPathProxyService.getAPIPath('habilities');
    return this.http.get<HabilitiesResponse>(path);
  }

  getTrainings(): Observable<TrainingsResponse> {
    const path = this.apiPathProxyService.getAPIPath('trainings');
    return this.http.get<TrainingsResponse>(path);
  }

  getLanguages(): Observable<LanguagesResponse> {
    const path = this.apiPathProxyService.getAPIPath('languages');
    return this.http.get<LanguagesResponse>(path);
  }

  getDeveloperWorkExperiences(): Observable<WorkExperiencesResponse> {
    const path = this.apiPathProxyService.getAPIPath('workExperiences');
    return this.http.get<WorkExperiencesResponse>(path);
  }
}
