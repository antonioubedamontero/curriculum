import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/curriculum/curriculum.component').then(page => page.CurriculumComponent)
  },
  {
    path: ':lang/web-developer',
    loadComponent: () => import('./pages/curriculum/curriculum.component').then(page => page.CurriculumComponent)
  },
  {
    path: 'en',
    loadComponent: () => import('./pages/curriculum/curriculum.component').then(page => page.CurriculumComponent)
  },
  {
    path: '**',
    redirectTo: '',
  }
];
