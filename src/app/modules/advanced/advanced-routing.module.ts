import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UndergraduateComponent } from './undergraduate/undergraduate.component';
import { CambridgeALevelComponent } from './cambridge-a-level/cambridge-a-level.component';

const routes: Routes = [
  {
    path: '',
    component: UndergraduateComponent,
  },
  {
    path: 'advanced',
    component: UndergraduateComponent,
  },
  {
    path: 'cambridge-a-level',
    component: CambridgeALevelComponent,
  },
  {
    path: '**',
    component: UndergraduateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvancedRoutingModule {}
