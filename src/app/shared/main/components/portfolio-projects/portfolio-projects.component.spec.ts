import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentRef } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { MainService } from '../../../../services/main.service';
import { MainMockService } from '../../../../mocks/services/main-mock.service';

import { PortfolioProjectsComponent } from './portfolio-projects.component';

describe('PortfolioProjectsComponent', () => {
  let component: PortfolioProjectsComponent;
  let componentRef: ComponentRef<PortfolioProjectsComponent>;
  let fixture: ComponentFixture<PortfolioProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PortfolioProjectsComponent,
        MatIconModule,
        TranslateModule.forRoot(),
      ],
      providers: [
        provideHttpClient(withFetch()),
        provideHttpClientTesting,
        {
          provide: MainService,
          useClass: MainMockService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PortfolioProjectsComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;

    componentRef.setInput('lang', 'es');

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should get portfolio projects from api', (done) => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(
        component.portfolioProjectsResource.value()?.length
      ).toBeGreaterThan(0);
      done();
    });
  });

  it('should render a portfolio projects title', (done) => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const htmlPortfolioTitle: HTMLElement =
        fixture.nativeElement.querySelector('.portfolio-projects-text-title');
      expect(htmlPortfolioTitle.innerHTML).toBe(
        'main.portfolio-projects.title'
      );
      done();
    });
  });

  it('should render a portfolio table', (done) => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const htmlPortfolioTable: HTMLElement =
        fixture.nativeElement.querySelector('table');
      expect(htmlPortfolioTable).toBeTruthy();
      done();
    });
  });
});
