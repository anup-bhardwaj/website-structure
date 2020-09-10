import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { AboutCompanyRoutingModule } from './about-company-routing.module';
import { AboutCompanyComponent } from './about-company.component';
import { AboutBannerComponent } from './about-banner/about-banner.component';
import { AboutBenefitsComponent } from './about-benefits/about-benefits.component';
import { AboutFourPartComponent } from './about-four-part/about-four-part.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProjectDesignComponent } from './project-design/project-design.component';
import { AboutIconComponent } from './about-icon/about-icon.component';
import { AboutTeamComponent } from './about-team/about-team.component';
import { AboutAchievementComponent } from './about-achievement/about-achievement.component';
import { SeparateLineComponent } from './separate-line/separate-line.component';


@NgModule({
  declarations: [AboutCompanyComponent, AboutBannerComponent, AboutBenefitsComponent, AboutFourPartComponent, AboutUsComponent, ProjectDesignComponent, AboutIconComponent, AboutTeamComponent, AboutAchievementComponent, SeparateLineComponent],
  imports: [
    CommonModule,
    AboutCompanyRoutingModule,
    LayoutModule
  ]
})
export class AboutCompanyModule { }
