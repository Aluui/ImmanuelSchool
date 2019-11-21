import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatMenuModule
} from "@angular/material";
import { MatCarouselModule } from "@ngmodule/material-carousel";

const matModules = [
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatInputModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...matModules, MatCarouselModule],
  exports: [CommonModule, ...matModules, MatCarouselModule]
})
export class SharedModule {}
