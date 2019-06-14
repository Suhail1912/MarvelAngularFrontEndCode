import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDetailsOrigianlInfoComponent } from './hero-details-origianl-info.component';

describe('HeroDetailsOrigianlInfoComponent', () => {
  let component: HeroDetailsOrigianlInfoComponent;
  let fixture: ComponentFixture<HeroDetailsOrigianlInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroDetailsOrigianlInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailsOrigianlInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
