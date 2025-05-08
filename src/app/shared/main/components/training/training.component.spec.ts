import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { TranslateModule } from '@ngx-translate/core';

import { TrainingComponent } from './training.component';
import { MainService } from '../../../../services/main.service';
import { MainMockService } from '../../../../mocks/services/main-mock.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentRef } from '@angular/core';

describe('TrainingComponent', () => {
  let component: TrainingComponent;
  let componentRef: ComponentRef<TrainingComponent>;
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
    componentRef = fixture.componentRef;

    componentRef.setInput('lang', 'es');

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should get trainings from api', (done) => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const trainings = component.trainingResouce.value()?.trainings || [];
      expect(trainings.length).toBeGreaterThan(0);
      done();
    });
  });

  it('should render training section title', (done) => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const htmlTrainingSectionTitle: HTMLElement =
        fixture.nativeElement.querySelector('.training-section-title');
      expect(htmlTrainingSectionTitle.innerHTML).toBe('main.training.title');
      done();
    });
  });

  it('should render a list with each training', (done) => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const htmlTrainingList: HTMLElement =
        fixture.nativeElement.querySelector('.training-list');
      expect(htmlTrainingList).toBeTruthy();

      const htmlTrainingsItems = htmlTrainingList.querySelectorAll('li');
      const trainings = component.trainingResouce.value()?.trainings ?? [];
      expect(htmlTrainingsItems.length).toBe(trainings.length);

      htmlTrainingsItems.forEach((htmlTraining) => {
        expect(htmlTraining.innerHTML).toBeTruthy();
      });

      done();
    });
  });
});
