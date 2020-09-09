import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { PortfolioBannerComponent } from './portfolio-banner/portfolio-banner.component';
import { PortfolioTabsComponent } from './portfolio-tabs/portfolio-tabs.component';
import { PortfolioMagazineComponent } from './portfolio-magazine/portfolio-magazine.component';
import { PortfolioIconComponent } from './portfolio-icon/portfolio-icon.component';
import { SeparateLineComponent } from './separate-line/separate-line.component';


@NgModule({
  declarations: [PortfolioComponent, PortfolioBannerComponent, PortfolioTabsComponent, PortfolioMagazineComponent, PortfolioIconComponent, SeparateLineComponent],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    LayoutModule
  ]
})
export class PortfolioModule { }
