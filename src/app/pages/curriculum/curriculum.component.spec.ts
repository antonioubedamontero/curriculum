import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { CurriculumComponent } from './curriculum.component';
import { CustomTranslateService } from '../../services/custom-translate.service';
import { CustomTranslateMockService } from '../../mocks/services/custom-translate-mock.service';
import { IdentificationMockService } from '../../mocks/services/identification-mock.service';
import { IdentificationService } from '../../services/identification.service';
import { ActivatedRouteMock } from '../../mocks/services/activated-route.mock';
import { TranslateModule } from '@ngx-translate/core';

describe('CurriculumComponent', () => {
  let component: CurriculumComponent;
  let fixture: ComponentFixture<CurriculumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
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
      imports: [CurriculumComponent, TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(CurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
