import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, switchMap } from 'rxjs';

import { ApiPathProxyService } from './api-path-proxy.service';
import {
  HabilitiesResponse,
  LanguagesResponse,
  PersonalProjects,
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
    return this.apiPathProxyService
      .getAPIPath('summary', lang)
      .pipe(switchMap((apiPath) => this.http.get<SummaryResponse>(apiPath)));
  }

  getHabilities(lang: string): Observable<HabilitiesResponse> {
    return this.apiPathProxyService
      .getAPIPath('habilities', lang)
      .pipe(switchMap((apiPath) => this.http.get<HabilitiesResponse>(apiPath)));
  }

  getTrainings(lang: string): Observable<TrainingsResponse> {
    return this.apiPathProxyService
      .getAPIPath('trainings', lang)
      .pipe(switchMap((apiPath) => this.http.get<TrainingsResponse>(apiPath)));
  }

  getLanguages(lang: string): Observable<LanguagesResponse> {
    return this.apiPathProxyService
      .getAPIPath('languages', lang)
      .pipe(switchMap((apiPath) => this.http.get<LanguagesResponse>(apiPath)));
  }

  getDeveloperWorkExperiences(
    lang: string
  ): Observable<WorkExperiencesResponse> {
    return this.apiPathProxyService
      .getAPIPath('workExperiences', lang)
      .pipe(
        switchMap((apiPath) => this.http.get<WorkExperiencesResponse>(apiPath))
      );
  }

  getPersonalProjects(lang: string): Observable<PersonalProjects> {
    return this.apiPathProxyService
      .getAPIPath('personalProjects', lang)
      .pipe(switchMap((apiPath) => this.http.get<PersonalProjects>(apiPath)));
  }
}
