import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LayoutModule } from '../layout/layout.module';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { ResponsiveComponent } from './responsive/responsive.component';
import { ThreePartsComponent } from './three-parts/three-parts.component';
import { LatestWorkComponent } from './latest-work/latest-work.component';
import { SliderComponent } from './slider/slider.component';
import { LogoComponent } from './logo/logo.component';
import { StrategyComponent } from './strategy/strategy.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { MagazineComponent } from './magazine/magazine.component';
import { InspiredComponent } from './inspired/inspired.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { SeparateLineComponent } from './separate-line/separate-line.component';


@NgModule({
  declarations: [HomeComponent, HomeBannerComponent, ResponsiveComponent, ThreePartsComponent, LatestWorkComponent, SliderComponent, LogoComponent, StrategyComponent, OurTeamComponent, BenefitsComponent, MagazineComponent, InspiredComponent, SubscribeComponent, SeparateLineComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutModule
  ]
})
export class HomeModule { }
