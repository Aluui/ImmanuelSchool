import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentlyEnrollingComponent } from './currently-enrolling/currently-enrolling.component';
import { EntranceExamsComponent } from './entrance-exams/entrance-exams.component';

const routes: Routes = [
  {
    path: '',
    component: CurrentlyEnrollingComponent,
  },
  {
    path: 'admissions',
    component: CurrentlyEnrollingComponent,
  },
  {
    path: 'entrance-exams',
    component: EntranceExamsComponent,
  },
  {
    path: '**',
    component: CurrentlyEnrollingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmissionsRoutingModule {}
