import { of } from 'rxjs';

export const mockActivatedRoute = {
  snapshot: {
    paramMap: {
      get: (key: string) => 'es',
    },
  },
  queryParams: of({}),
};
