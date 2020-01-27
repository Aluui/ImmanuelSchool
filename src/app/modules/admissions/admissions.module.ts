import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmissionsRoutingModule } from './admissions-routing.module';
import { CurrentlyEnrollingComponent } from './currently-enrolling/currently-enrolling.component';
import { EntranceExamsComponent } from './entrance-exams/entrance-exams.component';


@NgModule({
  declarations: [CurrentlyEnrollingComponent, EntranceExamsComponent],
  imports: [
    CommonModule,
    AdmissionsRoutingModule
  ]
})
export class AdmissionsModule { }
