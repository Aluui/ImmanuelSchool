import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatMenuModule
} from '@angular/material';

const matModules = [
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...matModules],
  exports: [...matModules]
})
export class SharedModule {}
