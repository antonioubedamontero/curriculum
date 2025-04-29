import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { identificationResponseMock } from '../../mocks/data/identification-response.mock';
import { signal } from '@angular/core';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;

    (component as any)['identificationResponse'] = signal(
      identificationResponseMock
    );

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a header with name and surname an a role in HTML', () => {
    const htmlHeader = fixture.nativeElement.querySelector('header');
    expect(htmlHeader).toBeTruthy();

    const htmlNameAndSurname = fixture.nativeElement.querySelector(
      '.header__name-and-surname'
    );
    expect(htmlNameAndSurname).toBeTruthy();

    const htmlRole = fixture.nativeElement.querySelector('.header__role');
    expect(htmlRole).toBeTruthy();
  });
});
