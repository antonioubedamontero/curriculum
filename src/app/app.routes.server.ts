import { RenderMode, ServerRoute } from '@angular/ssr';

import { availableLangs } from './interfaces/langs';

export const serverRoutes: ServerRoute[] = [
  {
    path: ':lang/web-developer',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      const langs = availableLangs.map((lang) => ({ lang }));

      return [...langs];
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
