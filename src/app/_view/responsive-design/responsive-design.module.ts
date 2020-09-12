import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { ResponsiveDesignRoutingModule } from './responsive-design-routing.module';
import { ResponsiveDesignComponent } from './responsive-design.component';
import { ResponsiveBannerComponent } from './responsive-banner/responsive-banner.component';
import { SeparateLineComponent } from './separate-line/separate-line.component';
import { BackgroundImageComponent } from './background-image/background-image.component';
import { HiringComponent } from './hiring/hiring.component';
import { IconComponent } from './icon/icon.component';
import { TabsComponent } from './tabs/tabs.component';


@NgModule({
  declarations: [ResponsiveDesignComponent, ResponsiveBannerComponent, SeparateLineComponent, BackgroundImageComponent, HiringComponent, IconComponent, TabsComponent],
  imports: [
    CommonModule,
    ResponsiveDesignRoutingModule,
    LayoutModule
  ]
})
export class ResponsiveDesignModule { }
