import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentRef } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';

import { NetworksComponent } from './networks.component';
import { identificationResponseMock } from '../../../mocks/data/identification-response.mock';

describe('NetworksComponent', () => {
  let component: NetworksComponent;
  let componentRef: ComponentRef<NetworksComponent>;
  let fixture: ComponentFixture<NetworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NetworksComponent, MatIconModule, TranslateModule.forRoot()],
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
    expect(component.identificationResponse().netWorks.length).toBeGreaterThan(
      1
    );
  });

  it('should render networks', () => {
    const htmlNetworkListItems: HTMLAnchorElement[] =
      fixture.nativeElement.querySelectorAll('.networks-list-item a');
    expect(htmlNetworkListItems.length).toBe(
      component.identificationResponse().netWorks.length
    );

    htmlNetworkListItems.forEach((htmlNetworkAnchor: HTMLAnchorElement) => {
      expect(htmlNetworkAnchor.href).toBeDefined();
      const htmlLAbel = htmlNetworkAnchor.querySelector(
        '.network-item-anchor__label'
      );
      expect(htmlLAbel?.innerHTML).toBeDefined();
    });
  });
});
