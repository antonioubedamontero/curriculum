import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { IdentificationResponse } from '../../interfaces';
import { identificationResponseMock } from '../data/identification-response.mock';

@Injectable({
  providedIn: 'root',
})
export class IdentificationMockService {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getIdentification(lang: string): Observable<IdentificationResponse> {
    return of(identificationResponseMock);
  }
}
