import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

//Component imports
import { HomeComponent } from "./home.component";

//TODO: Remove
// import { AdminStartComponent } from "../admin/admin-start.component";

import { AuthGuard } from "app/auth-guard.service";



const HomeRouting = RouterModule.forRoot([
    { path: "", component: HomeComponent, canActivate: [AuthGuard] }
]);

@NgModule({
    declarations: [HomeComponent],//, AdminStartComponent],
    imports: [
        RouterModule,
        HomeRouting
    ],
    exports: [HomeComponent]// AdminStartComponent]
})
export class HomeModule {

}