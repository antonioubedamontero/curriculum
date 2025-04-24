import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { CustomTranslateService } from './custom-translate.service';
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
  private readonly customTranslateService = inject(CustomTranslateService);

  private readonly baseUrl = environment.apiUrl;

  getSummary(): Observable<SummaryResponse> {
    const summaryUrl =
      this.customTranslateService.currentLang() === 'es'
        ? environment.summaryApiEsUrl
        : environment.summaryApiEnUrl;
    return this.http.get<SummaryResponse>(`${this.baseUrl}/${summaryUrl}`);
  }

  getHabilities(): Observable<HabilitiesResponse> {
    const habilitiesUrl =
      this.customTranslateService.currentLang() === 'es'
        ? environment.habilitiesApiEsUrl
        : environment.habilitiesApiEnUrl;
    return this.http.get<HabilitiesResponse>(
      `${this.baseUrl}/${habilitiesUrl}`
    );
  }

  getTrainings(): Observable<TrainingsResponse> {
    const trainingsUrl =
      this.customTranslateService.currentLang() === 'es'
        ? environment.trainingsApiEsUrl
        : environment.trainingsApiEnUrl;
    return this.http.get<TrainingsResponse>(`${this.baseUrl}/${trainingsUrl}`);
  }

  getLanguages(): Observable<LanguagesResponse> {
    const languagesUrl =
      this.customTranslateService.currentLang() === 'es'
        ? environment.languagesApiEsUrl
        : environment.languagesApiEnUrl;
    return this.http.get<LanguagesResponse>(`${this.baseUrl}/${languagesUrl}`);
  }

  getDeveloperWorkExperiences(): Observable<WorkExperiencesResponse> {
    const developerWorkExperiencesUrl =
      this.customTranslateService.currentLang() === 'es'
        ? environment.workExperiencesEsUrl
        : environment.workExperiencesEnUrl;
    return this.http.get<WorkExperiencesResponse>(
      `${this.baseUrl}/${developerWorkExperiencesUrl}`
    );
  }
}
