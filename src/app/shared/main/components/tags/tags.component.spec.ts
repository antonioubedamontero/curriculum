import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentRef } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { TagsComponent } from './tags.component';
import { SeoService } from '../../../../services/seo.service';
import { SeoMockService } from '../../../../mocks/services/seo-service.mock';

describe('TagsComponent', () => {
  let component: TagsComponent;
  let componentRef: ComponentRef<TagsComponent>;
  let fixture: ComponentFixture<TagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagsComponent, MatIconModule, TranslateModule.forRoot()],
      providers: [
        provideHttpClient(withFetch()),
        provideHttpClientTesting,
        {
          provide: SeoService,
          useClass: SeoMockService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TagsComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;

    componentRef.setInput('lang', 'es');

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should get tags from api', (done) => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const tags = component.tagsResource.value() || [];
      expect(tags.length).toBeGreaterThan(0);
      done();
    });
  });

  it('should render tags section title', (done) => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const htmlTagsSectionTitle: HTMLElement =
        fixture.nativeElement.querySelector('.tags-section-title');
      expect(htmlTagsSectionTitle.innerHTML).toBe('main.tags.title');
      done();
    });
  });

  it('should render a tags cloud', (done) => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const htmlTags: HTMLElement =
        fixture.nativeElement.querySelector('.tag-list');
      expect(htmlTags).toBeTruthy();

      const htmlTagItems = htmlTags.querySelectorAll('li mat-chip');
      const tags = component.tagsResource.value() ?? [];
      expect(htmlTagItems.length).toBe(tags.length);

      htmlTagItems.forEach((htmlTag) => {
        expect(htmlTag.textContent).toBeTruthy();
      });

      done();
    });
  });
});
