import { Injectable, signal } from '@angular/core';

import { Observable, of } from 'rxjs';

import { APIOrchestratorResponse } from '../../interfaces';
import { apiPathOrchestratorMock } from '../data/api-path-orchestrator.mock';

@Injectable({
  providedIn: 'root',
})
export class ApiPathProxyMockService {
  private readonly apiPaths = signal<APIOrchestratorResponse | {}>({});

  loadApiPathsFromApi(): Observable<APIOrchestratorResponse> {
    return of(apiPathOrchestratorMock);
  }

  getAPIPath(collection: string, language: string): Observable<string> {
    return of('http://fake-direction');
  }
}
