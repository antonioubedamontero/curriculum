import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { TranslateModule } from '@ngx-translate/core';

import { TrainingComponent } from './training.component';
import { MainService } from '../../../../services/main.service';
import { MainMockService } from '../../../../mocks/services/main-mock.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('TrainingComponent', () => {
  let component: TrainingComponent;
  let fixture: ComponentFixture<TrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingComponent, MatIconModule, TranslateModule.forRoot()],
      providers: [
        provideHttpClient(withFetch()),
        provideHttpClientTesting,
        {
          provide: MainService,
          useClass: MainMockService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should get trainings', () => {
    expect(component.trainings()?.length).toBeGreaterThan(0);
  });
});
