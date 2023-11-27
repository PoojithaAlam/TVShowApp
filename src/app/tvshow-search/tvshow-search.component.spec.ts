import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvshowSearchComponent } from './tvshow-search.component';

describe('TvshowSearchComponent', () => {
  let component: TvshowSearchComponent;
  let fixture: ComponentFixture<TvshowSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TvshowSearchComponent]
    });
    fixture = TestBed.createComponent(TvshowSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
