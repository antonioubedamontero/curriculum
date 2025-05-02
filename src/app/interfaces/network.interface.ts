import { SafeUrl } from '@angular/platform-browser';

export interface NetworkItem {
  shouldDownLoad?: boolean;
  url: SafeUrl | string;
  label: string;
  ariaLabel: string;
  icon: string;
  isPrintAction?: boolean;
}
