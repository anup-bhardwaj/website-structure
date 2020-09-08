import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { ContactBannerComponent } from './contact-banner/contact-banner.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';


@NgModule({
  declarations: [ContactComponent, ContactBannerComponent, ContactDetailsComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    LayoutModule
  ]
})
export class ContactModule { }
