import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { TranslateModule } from '@ngx-translate/core';

import { MainService } from '../../../../services/main.service';
import { MainMockService } from '../../../../mocks/services/main-mock.service';
import { LanguagesComponent } from './languages.component';
import { signal } from '@angular/core';

describe('LanguagesComponent', () => {
  let component: LanguagesComponent;
  let fixture: ComponentFixture<LanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguagesComponent, MatIconModule, TranslateModule.forRoot()],
      providers: [
        provideHttpClient(withFetch()),
        provideHttpClientTesting,
        {
          provide: MainService,
          useClass: MainMockService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LanguagesComponent);
    component = fixture.componentInstance;

    (component.lang as any) = signal('es');

    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should get languages', () => {
    expect(component.languages()?.length).toBeGreaterThan(0);
  });
});
