import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';

import { AsideComponent } from './aside.component';
import { signal } from '@angular/core';
import { identificationResponseMock } from '../../mocks/data/identification-response.mock';

describe('AsideComponent', () => {
  let component: AsideComponent;
  let fixture: ComponentFixture<AsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsideComponent, TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(AsideComponent);
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
