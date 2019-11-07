import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

const matModules = [MatMenuModule, MatIconModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...matModules],
  exports: [...matModules]
})
export class SharedModule {}
