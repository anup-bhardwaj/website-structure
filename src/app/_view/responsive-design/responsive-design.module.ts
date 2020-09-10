import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { ResponsiveDesignRoutingModule } from './responsive-design-routing.module';
import { ResponsiveDesignComponent } from './responsive-design.component';
import { ResponsiveBannerComponent } from './responsive-banner/responsive-banner.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { WhyChooseComponent } from './why-choose/why-choose.component';
import { SeparateLineComponent } from './separate-line/separate-line.component';
import { ImageWithTextComponent } from './image-with-text/image-with-text.component';
import { ThreePartsComponent } from './three-parts/three-parts.component';
import { TextPartComponent } from './text-part/text-part.component';
import { BackgroundImageComponent } from './background-image/background-image.component';
import { HiringComponent } from './hiring/hiring.component';
import { IconComponent } from './icon/icon.component';


@NgModule({
  declarations: [ResponsiveDesignComponent, ResponsiveBannerComponent, AboutUsComponent, WhyChooseComponent, SeparateLineComponent, ImageWithTextComponent, ThreePartsComponent, TextPartComponent, BackgroundImageComponent, HiringComponent, IconComponent],
  imports: [
    CommonModule,
    ResponsiveDesignRoutingModule,
    LayoutModule
  ]
})
export class ResponsiveDesignModule { }
