import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvancedRoutingModule } from './advanced-routing.module';
import { UndergraduateComponent } from './undergraduate/undergraduate.component';
import { CambridgeALevelComponent } from './cambridge-a-level/cambridge-a-level.component';


@NgModule({
  declarations: [UndergraduateComponent, CambridgeALevelComponent],
  imports: [
    CommonModule,
    AdvancedRoutingModule
  ]
})
export class AdvancedModule { }
