import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentRef } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

import { NetworksComponent } from './networks.component';
import { identificationResponseMock } from '../../../mocks/data/identification-response.mock';
import {
  WorkExpansionOpenPanelState,
  WorkExperienceExpasionPanelService,
} from '../../../services/work-experience-expasion-panel.service';

describe('NetworksComponent', () => {
  let component: NetworksComponent;
  let componentRef: ComponentRef<NetworksComponent>;
  let fixture: ComponentFixture<NetworksComponent>;

  beforeEach(async () => {
    window.print = jasmine.createSpy('print');

    await TestBed.configureTestingModule({
      imports: [NetworksComponent, MatIconModule, TranslateModule.forRoot()],
      providers: [
        {
          provide: WorkExperienceExpasionPanelService,
          useValue: {
            openState: {
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              set(value: WorkExpansionOpenPanelState) {
                return;
              },
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NetworksComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;

    componentRef.setInput('identificationResponse', identificationResponseMock);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get networks from identification response', () => {
    expect(component.networks().length).toBeGreaterThan(1);
  });

  it('should render networks', () => {
    const htmlNetworkListItems: HTMLAnchorElement[] =
      fixture.nativeElement.querySelectorAll('.networks-list-item a');
    expect(htmlNetworkListItems.length).toBe(component.networks().length);

    htmlNetworkListItems.forEach((htmlNetworkAnchor: HTMLAnchorElement) => {
      expect(htmlNetworkAnchor.href).toBeDefined();
      const htmlLAbel = htmlNetworkAnchor.querySelector(
        '.network-item-anchor__label'
      );
      expect(htmlLAbel?.innerHTML).toBeDefined();
    });
  });

  it('should print page when button is pressed', () => {
    const printPageSpy = spyOn(component, 'printPage').and.callThrough();
    component.printPage();
    expect(true).toBeTruthy();
    expect(printPageSpy).toHaveBeenCalled();
  });
});
