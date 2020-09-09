import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { ServiceRoutingModule } from './service-routing.module';
import { ServiceComponent } from './service.component';
import { ServiceBannerComponent } from './service-banner/service-banner.component';
import { IconWithTextComponent } from './icon-with-text/icon-with-text.component';
import { ThreePartsComponent } from './three-parts/three-parts.component';
import { ImageWithTextComponent } from './image-with-text/image-with-text.component';
import { ServicePartComponent } from './service-part/service-part.component';
import { ServiceIconComponent } from './service-icon/service-icon.component';
import { SeparateLineComponent } from './separate-line/separate-line.component';


@NgModule({
  declarations: [ServiceComponent, ServiceBannerComponent, IconWithTextComponent, ThreePartsComponent, ImageWithTextComponent, ServicePartComponent, ServiceIconComponent, SeparateLineComponent],
  imports: [
    CommonModule,
    ServiceRoutingModule,
    LayoutModule
  ]
})
export class ServiceModule { }
