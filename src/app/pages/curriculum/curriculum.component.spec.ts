import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Component, inject, input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { TranslateModule } from '@ngx-translate/core';

import { CurriculumComponent } from './curriculum.component';
import { IdentificationMockService } from '../../mocks/services/identification-mock.service';
import { IdentificationService } from '../../services/identification.service';
import { ActivatedRouteMock } from '../../mocks/services/activated-route.mock';
import { CustomTranslateService } from '../../services/custom-translate.service';
import { CustomTranslateMockService } from '../../mocks/services/custom-translate-mock.service';
import { IdentificationResponse } from '../../interfaces';

@Component({
  selector: 'app-header',
  imports: [],
  template: `<p>app-header</p>`,
})
export class HeaderMockComponent {
  identificationResponse = input.required<IdentificationResponse>();
}

@Component({
  selector: 'app-main',
  imports: [],
  template: `<p>app-main</p>`,
})
export class MainMockComponent {}

@Component({
  selector: 'app-aside',
  imports: [],
  template: `<p>app-aside</p>`,
})
export class AsideMockComponent {
  sanitizer = inject(DomSanitizer);

  identificationResponse = input.required<IdentificationResponse>();
}

@Component({
  selector: 'app-footer',
  imports: [],
  template: `<p>app-footer</p>`,
})
export class FooterMockComponent {
  identificationResponse = input.required<IdentificationResponse>();
}

describe('CurriculumComponent', () => {
  let component: CurriculumComponent;
  let fixture: ComponentFixture<CurriculumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        CurriculumComponent,
        HeaderMockComponent,
        MainMockComponent,
        AsideMockComponent,
        FooterMockComponent,
      ],
      providers: [
        provideHttpClient(withFetch()),
        provideHttpClientTesting,
        {
          provide: ActivatedRoute,
          useClass: ActivatedRouteMock,
        },
        {
          provide: CustomTranslateService,
          useClass: CustomTranslateMockService,
        },
        {
          provide: IdentificationService,
          useClass: IdentificationMockService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
