import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Custom Modules imports below.
import { HeaderModule } from "./header/header.module";
import { FooterModule } from "./footer/footer.module";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
