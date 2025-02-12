import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutes } from "./app.routes";
import { SecuredLayoutComponent } from "./layout/secured-layout/secured-layout.component";
import { TopBarComponent } from "./layout/top-bar/top-bar.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { NavMenuComponent } from "./layout/nav-menu/nav-menu.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule } from "./shared/shared.module";
import { FooterLinksColumnComponent } from "./layout/footer-links-column/footer-links-column.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    SecuredLayoutComponent,
    TopBarComponent,
    FooterComponent,
    NavMenuComponent,
    FooterLinksColumnComponent
  ],
  imports: [BrowserModule, SharedModule, AppRoutes, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
