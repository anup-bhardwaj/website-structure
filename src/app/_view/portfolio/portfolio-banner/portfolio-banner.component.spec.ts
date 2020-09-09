import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioBannerComponent } from './portfolio-banner.component';

describe('PortfolioBannerComponent', () => {
  let component: PortfolioBannerComponent;
  let fixture: ComponentFixture<PortfolioBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
