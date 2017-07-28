import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { adminRoutes } from "./admin.routing";
import { AdminComponent } from "./admin.component";
import { DashboardComponent } from "./admin-dashboard.component";
import { Page1 } from "./page1";
import { Page2 } from "./page2";

@NgModule({
    declarations: [
        AdminComponent,
        DashboardComponent,
        Page1,
        Page2
    ],
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AdminModule {

}