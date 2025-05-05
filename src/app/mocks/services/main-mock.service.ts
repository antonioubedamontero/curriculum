import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import {
  HabilitiesResponse,
  LanguagesResponse,
  SummaryResponse,
  TrainingsResponse,
  WorkExperiencesResponse,
} from '../../interfaces';
import {
  habilitiesResponseMock,
  languagesResponseMock,
  summaryResponseMock,
  trainingsResponseMock,
  workExperiencesResponseMock,
} from '../data/main-response.mock';

@Injectable({
  providedIn: 'root',
})
export class MainMockService {
  getSummary(lang: string): Observable<SummaryResponse> {
    return of(summaryResponseMock);
  }

  getHabilities(lang: string): Observable<HabilitiesResponse> {
    return of(habilitiesResponseMock);
  }

  getTrainings(lang: string): Observable<TrainingsResponse> {
    return of(trainingsResponseMock);
  }

  getLanguages(lang: string): Observable<LanguagesResponse> {
    return of(languagesResponseMock);
  }

  getDeveloperWorkExperiences(
    lang: string
  ): Observable<WorkExperiencesResponse> {
    return of(workExperiencesResponseMock);
  }
}
