import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Bootstrap imports
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

//Custom Modules imports below.
import { HeaderModule } from "./header/header.module";
import { FooterModule } from "./footer/footer.module";
import { HomeModule } from "./home/home.module";
import { AdminModule } from "./admin/admin.module";

import { AppComponent } from './app.component';

// import { AdminRouting } from "./admin/admin.routing";
import { HomeRouting } from "./home/home.routing";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HomeModule,
    HeaderModule,
    FooterModule,
    AdminModule,
    // AdminRouting,
    HomeRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
