import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './_view/layout/auth-layout/auth-layout.component';
import { WebsiteLayoutComponent } from './_view/layout/website-layout/website-layout.component';


const routes: Routes = [

  {
    path: "authentication",
    component: AuthLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./_view/authentication/authentication.module").then(
            m => m.AuthenticationModule
          )
      },
      {
        path: "error",
        loadChildren: () =>
          import("./_view/error/error.module").then(m => m.ErrorModule)
      },
    ]
  },

  {
    path: '',
    component: WebsiteLayoutComponent,
    children: [
      {
        path: '', loadChildren: () => import('./_view/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'about-company', loadChildren: () => import('./_view/about-company/about-company.module').then(m => m.AboutCompanyModule)
      },
      {
        path: 'contact', loadChildren: () => import('./_view/contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'team', loadChildren: () => import('./_view/team/team.module').then(m => m.TeamModule)
      },
      {
        path: 'portfolio', loadChildren: () => import('./_view/portfolio/portfolio.module').then(m => m.PortfolioModule)
      },
      {
        path: 'blog', loadChildren: () => import('./_view/blog/blog.module').then(m => m.BlogModule)
      },
      {
        path: 'service', loadChildren: () => import('./_view/service/service.module').then(m => m.ServiceModule)
      },
      {
        path: 'responsive-design', loadChildren: () => import('./_view/responsive-design/responsive-design.module').then(m => m.ResponsiveDesignModule)
      },
    ]
  },

  {
    path: "**",
    redirectTo: "error/404"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
