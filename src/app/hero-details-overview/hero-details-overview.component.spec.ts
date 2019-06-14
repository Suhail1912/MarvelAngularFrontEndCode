import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailsOverviewComponent } from './hero-details-overview.component';

describe('HeroDetailsOverviewComponent', () => {
  let component: HeroDetailsOverviewComponent;
  let fixture: ComponentFixture<HeroDetailsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDetailsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
