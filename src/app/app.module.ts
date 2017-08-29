import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialComponentModule } from "./material-component.module";
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

//Bootstrap imports
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

//Custom Modules imports below.
import { HeaderModule } from "./header/header.module";
import { FooterModule } from "./footer/footer.module";
import { HomeModule } from "./home/home.module";
import { AdminModule } from "./admin/admin.module";
import { ServiceModule } from "./services/service.module";

import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { AuthenticationService } from "app/services/authentication.service";
import { AuthGuard } from "app/auth-guard.service";
import { IdsHttpReqOpt } from "app/services/ids-http-request-options.helper";

// import { HomeRouting } from "./home/home.routing";

const AppRouting = RouterModule.forRoot([
  { path: "login", component: LoginComponent }
]);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialComponentModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceModule,
    NgbModule.forRoot(),
    HeaderModule,
    FooterModule,
    AdminModule,
    HomeModule,
    AppRouting
    // HomeRouting
  ],
  providers: [
    IdsHttpReqOpt,
    AuthenticationService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
