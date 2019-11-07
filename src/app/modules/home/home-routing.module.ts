import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutesNames } from './home-routes.names';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdmissionComponent } from './components/admission/admission.component';

const routes: Routes = [
  { path: RoutesNames.DASHBOARD, component: DashboardComponent },
  { path: RoutesNames.ADMISSION, component: AdmissionComponent }
  // { path: RoutesNames.WELCOME_DASHBOARD_ALT, component: components.WelcomeDashboardComponent },
  // { path: RoutesNames.REGISTER, component: components.RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
