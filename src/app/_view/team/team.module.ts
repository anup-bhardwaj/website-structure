import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../layout/layout.module';
import { TeamRoutingModule } from './team-routing.module';
import { TeamComponent } from './team.component';
import { TeamBannerComponent } from './team-banner/team-banner.component';
import { TeamTextComponent } from './team-text/team-text.component';
import { TeamBoxComponent } from './team-box/team-box.component';
import { TeamIconComponent } from './team-icon/team-icon.component';


@NgModule({
  declarations: [TeamComponent, TeamBannerComponent, TeamTextComponent, TeamBoxComponent, TeamIconComponent],
  imports: [
    CommonModule,
    TeamRoutingModule,
    LayoutModule
  ]
})
export class TeamModule { }
