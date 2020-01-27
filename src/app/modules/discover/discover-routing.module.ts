import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DisciplinePolicyComponent } from './discipline-policy/discipline-policy.component';
import { MeetThePrincipalComponent } from './meet-the-principal/meet-the-principal.component';
import { OurCeoComponent } from './our-ceo/our-ceo.component';
import { OurFacilitiesComponent } from './our-facilities/our-facilities.component';
import { OurTeamComponent } from './our-team/our-team.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'discipline-policy',
    component: DisciplinePolicyComponent,
  },
  {
    path: 'meet-the-principal',
    component: MeetThePrincipalComponent,
  },
  {
    path: 'our-ceo',
    component: OurCeoComponent,
  },
  {
    path: 'our-facilities',
    component: OurFacilitiesComponent,
  },
  {
    path: 'our-team',
    component: OurTeamComponent,
  },
  {
    path: '**',
    component: AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscoverRoutingModule {}
