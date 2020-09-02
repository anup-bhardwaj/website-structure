import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error.component';


const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: ErrorComponent
      },
      {
        path: "404",
        component: ErrorComponent
      },
      // {
      //   path: "500",
      //   component: Error5Component
      // },
      // {
      //   path: "503",
      //   component: Error503Component
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule { }
