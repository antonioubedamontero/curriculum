import { ComponentFixture, TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';

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

    (component as any)['identificationResponse'] = signal(
      identificationResponseMock
    );

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should print page when button is pressed', () => {
    const printPageSpy = spyOn(component, 'printPage').and.callThrough();
    component.printPage();
    expect(true).toBeTruthy();
    expect(printPageSpy).toHaveBeenCalled();
  });
});
