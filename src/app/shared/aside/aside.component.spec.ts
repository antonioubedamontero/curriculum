import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';

import { AsideComponent } from './aside.component';
import { Component, ComponentRef, input } from '@angular/core';
import { identificationResponseMock } from '../../mocks/data/identification-response.mock';
import { MatIconModule } from '@angular/material/icon';
import { IdentificationResponse } from '../../interfaces';

@Component({
  selector: 'app-networks',
  imports: [],
  template: `<p>fake networks</p>`,
})
export class NetworksMockComponent {
  identificationResponse = input.required<IdentificationResponse>();
}

describe('AsideComponent', () => {
  let component: AsideComponent;
  let componentRef: ComponentRef<AsideComponent>;
  let fixture: ComponentFixture<AsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsideComponent, MatIconModule, TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(AsideComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;

    componentRef.setInput('identificationResponse', identificationResponseMock);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render photo', () => {
    const photoUrl = component.identificationResponse().photoUrl;
    const htmlPhoto: HTMLImageElement =
      fixture.nativeElement.querySelector('img');
    expect(htmlPhoto.src).toBe(photoUrl.concat('/'));
    expect(htmlPhoto.alt).toBe('aside.alt.candidate');
  });

  it('should render email', () => {
    const htmlEmail: HTMLElement = fixture.nativeElement.querySelector(
      '.contact-info-item__link'
    );
    expect(htmlEmail.innerHTML).toBe(component.identificationResponse().email);
  });

  it('should render phone', () => {
    const htmlPhone: HTMLElement = fixture.nativeElement.querySelectorAll(
      '.contact-info-item__data'
    )[0];
    expect(htmlPhone.innerHTML.trim()).toBe(
      component.identificationResponse().phone
    );
  });

  it('should render city', () => {
    const htmlCity: HTMLElement = fixture.nativeElement.querySelectorAll(
      '.contact-info-item__data'
    )[1];
    expect(htmlCity.innerHTML.trim()).toBe(
      component.identificationResponse().provinceCountry
    );
  });

  it('should render networks', () => {
    const htmlNetworks: NetworksMockComponent =
      fixture.nativeElement.querySelector('app-networks');
    expect(htmlNetworks).toBeTruthy();
    expect(component.identificationResponse()).toBeTruthy();
  });
});
