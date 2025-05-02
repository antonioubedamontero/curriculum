import { Injectable, signal } from '@angular/core';

export enum WorkExpansionOpenPanelState {
  unset = 'unset',
  initial = 'initial',
  all = 'all',
}

@Injectable({
  providedIn: 'root',
})
export class WorkExperienceExpasionPanelService {
  openState = signal(WorkExpansionOpenPanelState.unset);

  openInitial() {
    this.openState.set(WorkExpansionOpenPanelState.initial);
  }

  openAll() {
    this.openState.set(WorkExpansionOpenPanelState.all);
  }
}
