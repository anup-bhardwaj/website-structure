import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { WebsiteLayoutComponent } from './website-layout/website-layout.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, ScrollToTopComponent, AuthLayoutComponent, ScrollToTopComponent, WebsiteLayoutComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    ScrollToTopComponent,
    RouterModule,
    AuthLayoutComponent,
  ]
})
export class LayoutModule { }
