import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogBannerComponent } from './blog-banner/blog-banner.component';
import { BlogSectionComponent } from './blog-section/blog-section.component';


@NgModule({
  declarations: [BlogComponent, BlogBannerComponent, BlogSectionComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    LayoutModule
  ]
})
export class BlogModule { }
