import { ComponentFixture, TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { FooterComponent } from './footer.component';
import { identificationResponseMock } from '../../mocks/data/identification-response.mock';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent, TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;

    (component as any)['identificationResponse'] = signal(
      identificationResponseMock
    );

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
