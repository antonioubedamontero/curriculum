import { convertToParamMap } from '@angular/router';

import { of } from 'rxjs';

export class ActivatedRouteMock {
  public paramMap = of(
    convertToParamMap({
      lang: 'es',
    })
  );
}
