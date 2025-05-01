import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  signal,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { TranslatePipe } from '@ngx-translate/core';

import { IdentificationResponse } from '../../interfaces';

@Component({
  selector: 'app-aside',
  imports: [TranslatePipe],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsideComponent {
  sanitizer = inject(DomSanitizer);

  identificationResponse = input.required<IdentificationResponse>();

  photoUrl = signal(
    // TODO: Fix this in source
    this.sanitizer.bypassSecurityTrustUrl(
      'https://raw.githubusercontent.com/antonioubedamontero/curriculum-data/main/photo-cv.jpg'
    )
  );
}
