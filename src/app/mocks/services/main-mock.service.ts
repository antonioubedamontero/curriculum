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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getSummary(lang: string): Observable<SummaryResponse> {
    return of(summaryResponseMock);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getHabilities(lang: string): Observable<HabilitiesResponse> {
    return of(habilitiesResponseMock);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getTrainings(lang: string): Observable<TrainingsResponse> {
    return of(trainingsResponseMock);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getLanguages(lang: string): Observable<LanguagesResponse> {
    return of(languagesResponseMock);
  }

  getDeveloperWorkExperiences(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    lang: string
  ): Observable<WorkExperiencesResponse> {
    return of(workExperiencesResponseMock);
  }
}
