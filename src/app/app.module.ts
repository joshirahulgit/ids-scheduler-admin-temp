import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialComponentModule } from "./material-component.module";
import { NgModule } from '@angular/core';

//Bootstrap imports
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

//Custom Modules imports below.
import { HeaderModule } from "./header/header.module";
import { FooterModule } from "./footer/footer.module";
import { HomeModule } from "./home/home.module";
import { AdminModule } from "./admin/admin.module";
import { ServiceModule } from "./services/service.module";

import { AppComponent } from './app.component';

import { HomeRouting } from "./home/home.routing";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialComponentModule,
    ServiceModule,
    NgbModule.forRoot(),
    HomeModule,
    HeaderModule,
    FooterModule,
    AdminModule,
    HomeRouting
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
