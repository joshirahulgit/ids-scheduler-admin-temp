import { Routes } from "@angular/router";
// import { AdminStartComponent } from "./admin-start.component";
import { DashboardComponent } from "./admin-dashboard.component";
import { AdminComponent } from "./admin.component";
import { Page1 } from "./page1";
import { Page2 } from "./page2";


export const adminRoutes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            {
                path: '',
                children: [
                    { path: 'page1', component: Page1 },
                    { path: 'page2', component: Page2 },
                    { path: '', component: DashboardComponent }
                ],
            }
        ]
    }
];