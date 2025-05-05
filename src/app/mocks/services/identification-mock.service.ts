import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { IdentificationResponse } from '../../interfaces';
import { identificationResponseMock } from '../data/identification-response.mock';

@Injectable({
  providedIn: 'root',
})
export class IdentificationMockService {
  getIdentification(lang: string): Observable<IdentificationResponse> {
    return of(identificationResponseMock);
  }
}
