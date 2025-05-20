import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';

import { FooterComponent } from './footer.component';
import { identificationResponseMock } from '../../mocks/data/identification-response.mock';
import { ComponentRef } from '@angular/core';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let componentRef: ComponentRef<FooterComponent>;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent, TranslateModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;

    componentRef.setInput('identificationResponse', identificationResponseMock);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a footer with a title, name and surname and year', (done) => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const htmlFooter: HTMLElement =
        fixture.nativeElement.querySelector('footer');
      expect(htmlFooter).toBeTruthy();

      expect(component.currentYear).toBe(new Date().getFullYear());
      expect(component.nameAndSurname()).toBe('mock-name mock-surname');

      const htmlFooterTitle: HTMLElement = fixture.nativeElement.querySelector(
        '.footer-content__title'
      );
      expect(htmlFooterTitle.innerHTML).toBe('footer.title');

      const htmlCopyrightHtml: HTMLElement =
        fixture.nativeElement.querySelector('.footer__copyright');
      expect(htmlCopyrightHtml.innerHTML).toBe(
        `© ${component.currentYear} - ${component.nameAndSurname()}`
      );
      done();
    });
  });
});
