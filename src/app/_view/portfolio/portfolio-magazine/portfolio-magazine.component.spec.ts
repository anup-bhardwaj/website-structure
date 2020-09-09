import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioMagazineComponent } from './portfolio-magazine.component';

describe('PortfolioMagazineComponent', () => {
  let component: PortfolioMagazineComponent;
  let fixture: ComponentFixture<PortfolioMagazineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioMagazineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioMagazineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
