import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscoverRoutingModule } from './discover-routing.module';
import { AboutComponent } from './about/about.component';
import { OurFacilitiesComponent } from './our-facilities/our-facilities.component';
import { OurCeoComponent } from './our-ceo/our-ceo.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { MeetThePrincipalComponent } from './meet-the-principal/meet-the-principal.component';
import { DisciplinePolicyComponent } from './discipline-policy/discipline-policy.component';


@NgModule({
  declarations: [AboutComponent, OurFacilitiesComponent, OurCeoComponent, OurTeamComponent, MeetThePrincipalComponent, DisciplinePolicyComponent],

  imports: [
    CommonModule,
    DiscoverRoutingModule
  ]
})
export class DiscoverModule { }
