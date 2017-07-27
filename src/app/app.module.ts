import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Bootstrap imports
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

//Custom Modules imports below.
import { HeaderModule } from "./header/header.module";
import { FooterModule } from "./footer/footer.module";
import { HomeModule } from "./home/home.module";

import { AppComponent } from './app.component';

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
    HomeRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
