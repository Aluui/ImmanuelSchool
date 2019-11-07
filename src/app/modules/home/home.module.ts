import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { AdmissionComponent } from './components/admission/admission.component';

@NgModule({
  declarations: [DashboardComponent, AdmissionComponent],
  imports: [SharedModule, HomeRoutingModule]
})
export class HomeModule {}
