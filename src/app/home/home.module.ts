import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

//Component imports
import { HomeComponent } from "./home.component";

//TODO: Remove
import { AdminStartComponent } from "../admin/admin-start.component";

@NgModule({
    declarations: [HomeComponent, AdminStartComponent],
    imports: [
        RouterModule
    ],
    exports: [HomeComponent, AdminStartComponent]
})
export class HomeModule {

}